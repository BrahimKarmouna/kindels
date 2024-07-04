import { productImgs } from "@/contains/fakeData";

import { StaticImageData } from "next/image";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: StaticImageData | string;
  color?: string;
  featuredImage: StaticImageData | string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string;
  content: string;
  description: string;
  previewImgs: string[];
  category: string;
  tags: string[];
  link: `/product-detail${string}`;
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  rating?: string;
  numberOfReviews?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Rey Nylon Backpack",
    description: "Brown cockroach wings",
    content: `Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
      <ul class="list-disc list-inside leading-7">
    <li>Made from a sheer Belgian power micromesh.</li>
    <li>
    74% Polyamide (Nylon) 26% Elastane (Spandex)
    </li>
    <li>
    Adjustable hook & eye closure and straps
    </li>
    <li>
    Hand wash in cold water, dry flat
    </li>
  </ul>`,
    price: 74,
    image: productImgs[16],
    previewImgs: [""],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",

    status: "New in",
    rating: "4.4",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: 'Round Buckle 1" Belt',
    description: "Classic green",
    content: `Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
      <ul class="list-disc list-inside leading-7">
    <li>Made from a sheer Belgian power micromesh.</li>
    <li>
    74% Polyamide (Nylon) 26% Elastane (Spandex)
    </li>
    <li>
    Adjustable hook & eye closure and straps
    </li>
    <li>
    Hand wash in cold water, dry flat
    </li>
  </ul>`,
    price: 68,
    image: productImgs[1],
    previewImgs: [""],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",

    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Waffle Knit Beanie",
    description: "New blue aqua",
    content: `Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
      <ul class="list-disc list-inside leading-7">
    <li>Made from a sheer Belgian power micromesh.</li>
    <li>
    74% Polyamide (Nylon) 26% Elastane (Spandex)
    </li>
    <li>
    Adjustable hook & eye closure and straps
    </li>
    <li>
    Hand wash in cold water, dry flat
    </li>
  </ul>`,
    price: 132,
    image: productImgs[15],
    previewImgs: [""],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",

    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Travel Pet Carrier",
    description: "Dark pink 2023",
    content: `Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
      <ul class="list-disc list-inside leading-7">
    <li>Made from a sheer Belgian power micromesh.</li>
    <li>
    74% Polyamide (Nylon) 26% Elastane (Spandex)
    </li>
    <li>
    Adjustable hook & eye closure and straps
    </li>
    <li>
    Hand wash in cold water, dry flat
    </li>
  </ul>`,
    price: 28,
    image: productImgs[3],
    previewImgs: [""],
    category: "Category 1",
    tags: ["tag1", "tag2"],

    link: "/product-detail/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Leather Gloves",
    description: "Perfect mint green",
    content: `Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
      <ul class="list-disc list-inside leading-7">
    <li>Made from a sheer Belgian power micromesh.</li>
    <li>
    74% Polyamide (Nylon) 26% Elastane (Spandex)
    </li>
    <li>
    Adjustable hook & eye closure and straps
    </li>
    <li>
    Hand wash in cold water, dry flat
    </li>
  </ul>`,
    price: 42,
    image: productImgs[4],
    previewImgs: [""],
    category: "Category 1",
    tags: ["tag1", "tag2"],

    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Hoodie Sweatshirt",
    description: "New design 2023",
    content: `Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.
      <ul class="list-disc list-inside leading-7">
    <li>Made from a sheer Belgian power micromesh.</li>
    <li>
    74% Polyamide (Nylon) 26% Elastane (Spandex)
    </li>
    <li>
    Adjustable hook & eye closure and straps
    </li>
    <li>
    Hand wash in cold water, dry flat
    </li>
  </ul>`,
    price: 30,
    image: productImgs[5],
    previewImgs: [""],
    category: "Category 1",
    tags: ["tag1", "tag2"],

    link: "/product-detail/",

    rating: "4.9",
    numberOfReviews: 98,
  },
];
