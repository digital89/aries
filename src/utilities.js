const tryRequest = async (request) => {
  try {
    const response = await request()
    return { data: response.data }
  } catch (error) {
    return { error: error.response ? error.response.data : error.message }
  }
}

module.exports = {
  tryRequest,
}
