// update the username for topic access
const username = 'dashboard'
// add token for topic access, be careful not to reveal you tokens, consider using env variables
const token = ''

async function requestToWSEndpoint (websocketSubject, webSocketRequest, query, liveData) {
  const reqToken = username.concat(':', token)
  const firstMessage = {
    token: reqToken,
    stats: 20,
    sql: query,
    live: liveData
  }
  webSocketRequest.onopen = () => {
    webSocketRequest.send(JSON.stringify(firstMessage))
    webSocketRequest.onmessage = (streamEvent) => {
      const isRecord = JSON.parse(streamEvent.data).type === 'RECORD'
      const isComplete = JSON.parse(streamEvent.data).type === 'END'
      const isError = JSON.parse(streamEvent.data).type === 'ERROR'
      isRecord && websocketSubject.next(JSON.parse(streamEvent.data).data.value)
      isError && websocketSubject.console.error(error => console.error(error))
      isComplete && websocketSubject.complete()
    }
  }
}

export { requestToWSEndpoint }
