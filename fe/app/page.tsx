'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  // fetch daa afer update or after page load
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      if (!response.ok) {
        throw new Error('Failed to gett tasks data');
      }
      const result = await response.json();
      setData(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // handle delete task callback
  const deleteData = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/tasks/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      fetchData();
      // remove loading state
      setLoading(false);

      // return data
      const responseData = await response.json();
      return responseData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
      setError(error);
    }
  };

  // handle add task
  const addData = async () => {
    const title = (inputRef && inputRef.current) ? inputRef.current.value: null;
    
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title})
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      fetchData();
      // remove loading state
      setLoading(false);

      // return data
      const responseData = await response.json();
      return responseData;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
      setError(error);
    }
  };

  // pageload API call
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurerred</p>;
  if (!data) return null

  return (
    <div className="container">
        <h1>To-Do List</h1>
        <div className="input-container">
        {/* display existing tasks */}
        <ul>
          {data.map((task, index) => (
            <li key={index}>
              {task.title} <button>Edit</button> | <button onClick={() => deleteData(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
        </div>

        <br /><br />
        Add Tasks Here
        <input type="text" ref={inputRef} placeholder="Add new task..." />
        <button onClick={() => addData()}>Add Task</button>
    </div>
  );
}
