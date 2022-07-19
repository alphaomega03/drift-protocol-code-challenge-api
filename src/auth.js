class AuthService {
  async validateApiKey(apiKey, db) {
    const apiKeysRef = db.collection('apiKeys')
    const snapshot = await apiKeysRef.where('key', '==', apiKey).get()
    let hasKey = false
    
    snapshot.forEach(doc => {
      hasKey = true
    })
    return hasKey
  }
}

module.exports = {
  AuthService
}