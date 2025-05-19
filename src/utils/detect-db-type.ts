const detectDbType = (url: string) => new URL(url).protocol.replace(':', '')

export default detectDbType
