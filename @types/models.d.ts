import { Cuisine, Location } from "@prisma/client";

interface IRestaurant {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  // images: string[];
  // description: string;
  // open_time: string;
  // close_time: string;
  // slug: string;
  // location_id: number;
  // cuisine_id: number;
  // created_at: Date | string;
  // updated_at: Date | string;
  // items: [];
}
