class HttpClient {
  /**
   * @constructor
   * @param baseUrl
   */
  constructor({ baseUrl = "" } = { baseUrl: "" }) {
    this.baseUrl = baseUrl;
  }

  /**
   * @param url
   * @param options
   * @return {Promise<any>}
   */
  async get(url, options = {}) {
    const path = this.baseUrl + url;

    const response = await fetch(path, {
      method: "get",
      ...options
    });

    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  }

  /**
   * @param url
   * @param postData
   * @param options
   * @return {Promise<any>}
   */
  async post(url, postData, options) {
    const path = this.baseUrl + url;

    const response = await fetch(path, {
      method: "post",
      body: JSON.stringify(postData),
      ...options
    });

    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  }
}

export { HttpClient };
export default new HttpClient();
