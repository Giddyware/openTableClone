import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import Head from "next/head";
import RootLayout from "../../layout";
import RestaurantLayout from "./layout";
import InferNextPropsType from "infer-next-props-type";

import db from "@/app/lib/prismadb";
import Images from "./components/Images";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = InferNextPropsType<typeof getStaticProps>;

const RestaurantDetails = ({ restaurant }: Props) => {
  // const restaurant = await fetchRestaurantBySlug(params.slug);

  // console.log(restaurant, "restaurant");
  return (
    <RootLayout>
      <Head>
        <title>Milestones Grill (Toronto) | Open Table</title>
        <meta name="description" content="Generated by Giddyware" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RestaurantLayout>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar slug={restaurant.slug} />
          <Title name={restaurant.name} />
          <Rating />
          <Description description={restaurant.description} />
          <Images images={restaurant.images} />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg">
          <ReservationCard />
        </div>
      </RestaurantLayout>
    </RootLayout>
  );
};
export default RestaurantDetails;

//* FETCH RESTAURANT BY SLUG

export const getStaticProps: GetStaticProps<{
  restaurant: IRestaurantSafe;
}> = async (context) => {
  try {
    const { params } = context as { params: IParams };

    const data = await db.restaurant.findUnique({
      where: {
        slug: params?.slug,
      },
      select: {
        id: true,
        name: true,
        images: true,
        description: true,
        slug: true,
      },
    });

    return { props: { restaurant: data as IRestaurantSafe } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await db.restaurant.findMany();
  const paths = data.map((restaurant) => ({
    params: { slug: restaurant?.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
