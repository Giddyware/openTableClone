// import { Cuisine, Location, Restaurant } from "@prisma/client";



interface IRestaurant {
  id: number;
  name: string;
  main_image: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
  created_at: Date;
  updated_at: Date;
}

interface IRestaurantSafe extends IRestaurant {
  created_at: string;
  updated_at: string;
}

interface ICuisine {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

interface ICuisineSafe extends ICuisine {
  created_at: string;
  updated_at: string;
}
interface ILocation {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

interface ILocationSafe extends ILocation {
  created_at: string;
  updated_at: string;
}

interface IParams {
  [key: string]: string | undefined;
}
