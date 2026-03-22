export async function registerPush() {
  if (!('serviceWorker' in navigator) || !('Notification' in window)) {
    return { ok: false, reason: 'unsupported' }
  }

  const permission = await Notification.requestPermission()
  return { ok: permission === 'granted', reason: permission }
}
