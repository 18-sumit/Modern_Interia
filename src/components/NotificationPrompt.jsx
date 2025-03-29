import { useState, useEffect } from 'react';

const NotificationPrompt = () => {
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        // Check if notifications are supported
        if ('Notification' in window) {
            // Check if permission is not granted
            if (Notification.permission !== 'granted') {
                setShowPrompt(true);
            }
        }
    }, []);

    const requestPermission = async () => {
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                setShowPrompt(false);
                // Subscribe to push notifications
                const registration = await navigator.serviceWorker.ready;
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY' // Replace with your VAPID public key
                });
                // Send subscription to your server
                console.log('Push Notification subscription:', subscription);
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
        }
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-sm z-50">
            <h3 className="text-lg font-semibold mb-2">Stay Updated!</h3>
            <p className="text-gray-600 mb-4">
                Get notified about our latest designs and exclusive offers.
            </p>
            <div className="flex justify-end space-x-2">
                <button
                    onClick={() => setShowPrompt(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                    Not Now
                </button>
                <button
                    onClick={requestPermission}
                    className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90"
                >
                    Enable Notifications
                </button>
            </div>
        </div>
    );
};

export default NotificationPrompt; 