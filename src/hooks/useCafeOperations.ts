import { useState, useEffect } from "react";

type QueueData = {
  currentWaitTime: string;
  activeOrders: number;
  status: string;
};

export function useCafeOperations() {
  const [queueData, setQueueData] = useState<QueueData | null>(null);
  const [loading, setLoading] = useState(true);
  const [inLine, setInLine] = useState(false);
  const [queuePosition, setQueuePosition] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    const fetchQueue = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/queue");
        const data = await res.json();
        if (active) {
          setQueueData(data);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch queue data", err);
        if (active) setLoading(false);
      }
    };
    fetchQueue();
    const interval = setInterval(fetchQueue, 30000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  const requestQueueSpot = () => {
    if (queueData) {
      setInLine(true);
      setQueuePosition(queueData.activeOrders + 1);
    }
  };

  return { queueData, loading, inLine, queuePosition, requestQueueSpot };
}

