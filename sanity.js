import { ClientError, sanityClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";

const client = sanityClient({
  projectId: "t4gds8oe",
  dataset: "production",
  useCdn: true,
   apiVersion: "2021-10-21"
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)

//run this to add exception for localhost 300- cors policy
//sanity cors add https://localhost:3000

export default client;