import React, { useState, useEffect } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null); // To display contributor profile

  // Fetch notifications (Mock API or replace with actual API)
  useEffect(() => {
    const fetchNotifications = async () => {
      const mockNotifications = [
        { id: 1, projectName: "Project Alpha", contributorName: "John Doe", contributorId: 101 },
        { id: 2, projectName: "Project Beta", contributorName: "Jane Smith", contributorId: 102 },
      ];
      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  const handleAccept = (requestId) => {
    alert(`Contributor ${requestId} accepted.`);
    setNotifications((prev) => prev.filter((notif) => notif.id !== requestId));
    setSelectedRequest(null);
  };

  const handleReject = (requestId) => {
    alert(`Contributor ${requestId} rejected.`);
    setNotifications((prev) => prev.filter((notif) => notif.id !== requestId));
    setSelectedRequest(null);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className="bg-white p-4 rounded shadow-md flex justify-between items-center"
            >
              <div>
                <p>
                  <strong>{notif.contributorName}</strong> liked your project{" "}
                  <strong>{notif.projectName}</strong>.
                </p>
              </div>
              <button
                onClick={() => setSelectedRequest(notif)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Manage
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No new notifications.</p>
        )}
      </div>

      {/* Modal for Contributor Management */}
      {selectedRequest && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-96 p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-2">Contributor Details</h2>
              <p>
                <strong>Name:</strong> {selectedRequest.contributorName}
              </p>
              <p>
                <strong>Project:</strong> {selectedRequest.projectName}
              </p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleAccept(selectedRequest.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(selectedRequest.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Reject
                </button>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notifications;
