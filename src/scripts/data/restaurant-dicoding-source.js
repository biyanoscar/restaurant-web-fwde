import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDicodingSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    return response.json();
  }
}

export default RestaurantDicodingSource;
