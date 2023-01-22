const apiUrl = "https://incandescent-pastoral-respect.glitch.me"

export const createUser = async (username) => {
   const request = fetch(`${apiUrl}/user`, {
      method: 'POST',
      headers: {
        'X-API-Key': "w3VMNnfFdElrsd8UdYjf",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
          username: `${username}`,
          translations: [] 
      })
  })

  return request
}
