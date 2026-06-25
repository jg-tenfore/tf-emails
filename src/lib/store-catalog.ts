/**
 * Pro shop product catalog + brand logos, generated from store-big/manifest.csv.
 * Images are served via Storybook's staticDirs mapping ("/store-images/...").
 * Regenerate by re-running the catalog generator if the manifest changes.
 */

export interface StoreProduct {
  /** Top-level group: "apparel" | "equipment" | "shoes". */
  category: string;
  /** Sub-group, e.g. "mens", "womens", "golf-balls", "golf-shoes". */
  subcategory: string;
  /** Real product name from the source catalog. */
  title: string;
  /** Resolved image URL (drop straight into an <img src>). */
  src: string;
  /** File name including extension. */
  file: string;
}

export interface BrandLogo {
  name: string;
  src: string;
}

export const storeProducts: StoreProduct[] = [
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Bennet Short Sleeve Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000059347-81-01_pc-072059d417.webp",
    "file": "2000000059347-81-01_pc-072059d417.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Mcclure Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000055876-59-01_pc-e31b67db78.webp",
    "file": "2000000055876-59-01_pc-e31b67db78.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Bellfield Men's Golf Hoodie",
    "src": "/store-images/apparel/mens/2000000059105-280-01_pc-e26cc13f94.webp",
    "file": "2000000059105-280-01_pc-e26cc13f94.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "USA Flags Sankaty Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000061923-526-01_pc-b74e872212.webp",
    "file": "2000000061923-526-01_pc-b74e872212.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Dri-Fit Men's Good Blade Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000054595-59-01_pc-dd5b6a8095.webp",
    "file": "2000000054595-59-01_pc-dd5b6a8095.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Good Good Flag Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000055337-59-01_pc-73765b62fb.webp",
    "file": "2000000055337-59-01_pc-73765b62fb.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Performance American Flag Sankaty Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000060351-207-01_pc-7cc109b762.webp",
    "file": "2000000060351-207-01_pc-7cc109b762.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Dri-Fit Men's Good Solid Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000054596-5-01_pc-599a9998dc.webp",
    "file": "2000000054596-5-01_pc-599a9998dc.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Performance Cooling Flat Front Men's 8\" Golf Shorts",
    "src": "/store-images/apparel/mens/2000000056943-38-01_pc-0949d0fcbb.webp",
    "file": "2000000056943-38-01_pc-0949d0fcbb.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Continental Drift Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000055380-1-01_pc-64326107b6.webp",
    "file": "2000000055380-1-01_pc-64326107b6.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Ultimate 365+ Men's 8.5\" Golf Shorts",
    "src": "/store-images/apparel/mens/2000000054136-5-01_pc-bcf5b790db.webp",
    "file": "2000000054136-5-01_pc-bcf5b790db.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Americana Striped Sankaty Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000061925-84-01_pc-61e9fb4add.webp",
    "file": "2000000061925-84-01_pc-61e9fb4add.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "American Flag Golf Dad Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000059092-89-01_pc-c1dbbe2608.webp",
    "file": "2000000059092-89-01_pc-c1dbbe2608.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Airflux Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000058046-81-01_pc-deb987f80f.webp",
    "file": "2000000058046-81-01_pc-deb987f80f.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Featherweight Perf Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000055381-51-01_pc-3e8e5d961e.webp",
    "file": "2000000055381-51-01_pc-3e8e5d961e.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Gingham Featherweight Performance Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000060401-447-01_pc-accec88311.webp",
    "file": "2000000060401-447-01_pc-accec88311.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Water Hazard Featherweight Performance Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000060405-526-01_pc-71618125f4.webp",
    "file": "2000000060405-526-01_pc-71618125f4.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Featherweight Festival Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000055336-18-01_pc-bd0c08a74e.webp",
    "file": "2000000055336-18-01_pc-bd0c08a74e.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Golf Dad Bags Men's Pocket Golf T-Shirt",
    "src": "/store-images/apparel/mens/2000000061647-59-01_pc-53cea94475.webp",
    "file": "2000000061647-59-01_pc-53cea94475.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "SP26: Performance Printed Polo",
    "src": "/store-images/apparel/mens/2000000054978-5-01_pc-55ac9efcbf.webp",
    "file": "2000000054978-5-01_pc-55ac9efcbf.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Market Stripe Featherweight Performance Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000060402-38-01_pc-787d3073aa.webp",
    "file": "2000000060402-38-01_pc-787d3073aa.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Performance Cooling Men's Golf Quarter Zip",
    "src": "/store-images/apparel/mens/2000000056944-39-01_pc-0c5dd14c6d.webp",
    "file": "2000000056944-39-01_pc-0c5dd14c6d.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "US Open Lisle Locker Grid Print Men's Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000057827-61-01_pc-a72036e68a.webp",
    "file": "2000000057827-61-01_pc-a72036e68a.webp"
  },
  {
    "category": "apparel",
    "subcategory": "mens",
    "title": "Dri-Fit Men's Good Floral Golf Polo Shirt",
    "src": "/store-images/apparel/mens/2000000054599-59-01_pc-1e29822ee4.webp",
    "file": "2000000054599-59-01_pc-1e29822ee4.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Moveknit Zip 2.0 Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000045603-1109-01_pc-aa571058bd.webp",
    "file": "2000000045603-1109-01_pc-aa571058bd.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Tamara Women's Golf Skirt",
    "src": "/store-images/apparel/womens/2000000061542-92-01_pc-06879bc1b3.webp",
    "file": "2000000061542-92-01_pc-06879bc1b3.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Moveknit Zip 2.0 Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000054735-38-01_pc-0519493e6b.webp",
    "file": "2000000054735-38-01_pc-0519493e6b.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Americana Printed Performance Quarter Zip Women's Golf Dress",
    "src": "/store-images/apparel/womens/2000000057652-57-01_pc-c89d23fa93.webp",
    "file": "2000000057652-57-01_pc-c89d23fa93.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Night Bloom Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000057230-72-01_pc-427d47ae5a.webp",
    "file": "2000000057230-72-01_pc-427d47ae5a.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Oslo Women's Sleeveless Golf Shirt",
    "src": "/store-images/apparel/womens/2000000061545-92-01_pc-2d96cc943c.webp",
    "file": "2000000061545-92-01_pc-2d96cc943c.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Knockout A-Line Women's 16\" Golf Skort",
    "src": "/store-images/apparel/womens/2000000054265-38-01_pc-bd6d26ccfc.webp",
    "file": "2000000054265-38-01_pc-bd6d26ccfc.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Moveknit Zip Printed 2.0 Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000054743-1117-01_pc-67eea8b7c0.webp",
    "file": "2000000054743-1117-01_pc-67eea8b7c0.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Faux Wrap Performance Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000060498-16-01_pc-314b1663cd.webp",
    "file": "2000000060498-16-01_pc-314b1663cd.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Zephyra Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000061527-109-01_pc-980a627551.webp",
    "file": "2000000061527-109-01_pc-980a627551.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Frida Bow Women's Sleeveless Golf Polo Shirt",
    "src": "/store-images/apparel/womens/2000000058131-92-01_pc-eb409966f1.webp",
    "file": "2000000058131-92-01_pc-eb409966f1.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Gracie 2.0 Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000056138-109-01_pc-7e222d5b28.webp",
    "file": "2000000056138-109-01_pc-7e222d5b28.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Moveknit Game Set Match 2.0 Women's 15\" Golf Skort",
    "src": "/store-images/apparel/womens/2000000054666-5-01_pc-9e5350d58b.webp",
    "file": "2000000054666-5-01_pc-9e5350d58b.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Skyloft Light Women's Sleeveless Golf Polo Shirt",
    "src": "/store-images/apparel/womens/2000000058519-1478-01_pc-649d7c8b94.webp",
    "file": "2000000058519-1478-01_pc-649d7c8b94.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Francoise Eyelet Women's Sleeveless Golf Dress",
    "src": "/store-images/apparel/womens/2000000055834-61-01_pc-ea238fcf52.webp",
    "file": "2000000055834-61-01_pc-ea238fcf52.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Justine Women's Golf Quarter Zip",
    "src": "/store-images/apparel/womens/2000000058130-758-01_pc-79d6e2497a.webp",
    "file": "2000000058130-758-01_pc-79d6e2497a.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Game Women's 16\" Golf Skort",
    "src": "/store-images/apparel/womens/2000000057274-677-01_pc-5172fe224b.webp",
    "file": "2000000057274-677-01_pc-5172fe224b.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Victory Dri-Fit Women's Short Sleeve Golf Polo Shirt",
    "src": "/store-images/apparel/womens/2000000054804-927-01_pc-875e548c54.webp",
    "file": "2000000054804-927-01_pc-875e548c54.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Huxley Women's 15\" Golf Skort",
    "src": "/store-images/apparel/womens/2000000058133-115-01_pc-1318b23de4.webp",
    "file": "2000000058133-115-01_pc-1318b23de4.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Jaydea Full Zip Women's Golf Jacket",
    "src": "/store-images/apparel/womens/2000000058132-115-01_pc-f7392dc2c4.webp",
    "file": "2000000058132-115-01_pc-f7392dc2c4.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Piped Women's Sleeveless Golf Polo Shirt",
    "src": "/store-images/apparel/womens/2000000057647-92-01_pc-20d9faa978.webp",
    "file": "2000000057647-92-01_pc-20d9faa978.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Ruffle Performance Women's Golf Dress",
    "src": "/store-images/apparel/womens/2000000060499-5-01_pc-41dd930eca.webp",
    "file": "2000000060499-5-01_pc-41dd930eca.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "Pleated Women's 17\" Golf Skort",
    "src": "/store-images/apparel/womens/2000000055431-92-01_pc-035e56e975.webp",
    "file": "2000000055431-92-01_pc-035e56e975.webp"
  },
  {
    "category": "apparel",
    "subcategory": "womens",
    "title": "BreezeBlend Timeless Full Zip Women's Golf Jacket",
    "src": "/store-images/apparel/womens/2000000058033-1119-01_pc-eaffbce1e9.webp",
    "file": "2000000058033-1119-01_pc-eaffbce1e9.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Victory Tour 4 NRG Men's Spiked Golf Shoes (U.S. Open)",
    "src": "/store-images/shoes/golf-shoes/2000000062157-01_pc-c7a99096e9.webp",
    "file": "2000000062157-01_pc-c7a99096e9.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Next% Tour 3 NRG Men's Spiked Golf Shoes (U.S. Open)",
    "src": "/store-images/shoes/golf-shoes/2000000062158-01_pc-33efc86813.webp",
    "file": "2000000062158-01_pc-33efc86813.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Todd Snyder X FootJoy - Premiere Series Marquis Men's Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000061815-1689-01_pc-dd497cac7f.webp",
    "file": "2000000061815-1689-01_pc-dd497cac7f.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Todd Snyder X FootJoy - Premiere Series Packard Men's Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000061814-1689-01_pc-972f590a3d.webp",
    "file": "2000000061814-1689-01_pc-972f590a3d.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Jordan Grind Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000056604-87-01_pc-bec7c35579.webp",
    "file": "2000000056604-87-01_pc-bec7c35579.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "2026 Legends Series - Premiere Series Marquis Men's Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000061813-1688-01_pc-2c0615b644.webp",
    "file": "2000000061813-1688-01_pc-2c0615b644.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Tempo G Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000056859-83-01_pc-aa90f62468.webp",
    "file": "2000000056859-83-01_pc-aa90f62468.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "2026 Legends Series - Premiere Series Packard Men's Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000061812-1687-01_pc-5e63fb4f13.webp",
    "file": "2000000061812-1687-01_pc-5e63fb4f13.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Premiere Series - 2026 Packard Men's Spiked Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000058765-86-01_pc-d60ad78b0f.webp",
    "file": "2000000058765-86-01_pc-d60ad78b0f.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Fresh Foam Contend v3 Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000055152-39-01_pc-08b315caf1.webp",
    "file": "2000000055152-39-01_pc-08b315caf1.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Contour Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000061719-109-01_pc-45032ed3b0.webp",
    "file": "2000000061719-109-01_pc-45032ed3b0.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Fusion Grip ST Men's Spiked Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000059493-40-01_pc-ba576984f8.webp",
    "file": "2000000059493-40-01_pc-ba576984f8.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Swami SL Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000055182-87-01_pc-d32a83d216.webp",
    "file": "2000000055182-87-01_pc-d32a83d216.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Blade Tour Fairway Heritage Men's Spiked Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000061870-553-01_pc-2697c744bd.webp",
    "file": "2000000061870-553-01_pc-2697c744bd.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "NuAge Mega Men's Spiked Golf Shoe",
    "src": "/store-images/shoes/golf-shoes/2000000061713-501-01_pc-f89e95a1a4.webp",
    "file": "2000000061713-501-01_pc-f89e95a1a4.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "S-Casual Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000047011-5-01_pc-faed680eec.webp",
    "file": "2000000047011-5-01_pc-faed680eec.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "NuAge Mega Men's Spiked Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000053981-87-01_pc-59a8c0130f.webp",
    "file": "2000000053981-87-01_pc-59a8c0130f.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Tour Classic Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000061717-93-01_pc-c0cfa8bb0f.webp",
    "file": "2000000061717-93-01_pc-c0cfa8bb0f.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Premiere Series - 2026 Men's Marquis Spiked Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000058764-6-01_pc-3817549e42.webp",
    "file": "2000000058764-6-01_pc-3817549e42.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Fresh Foam Contend v3 Women's Spikeless Golf Shoe",
    "src": "/store-images/shoes/golf-shoes/2000000055187-351-01_pc-9d0217eb2f.webp",
    "file": "2000000055187-351-01_pc-9d0217eb2f.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "997 Men's Spiked Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000059719-3-01_pc-0a1432806b.webp",
    "file": "2000000059719-3-01_pc-0a1432806b.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Dandy Leggero Men's Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000058399-01_pc-72437ecb33.webp",
    "file": "2000000058399-01_pc-72437ecb33.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Premiere Series - 2026 Packard Women's Spiked Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000055331-84-01_pc-d97f2038f2.webp",
    "file": "2000000055331-84-01_pc-d97f2038f2.webp"
  },
  {
    "category": "shoes",
    "subcategory": "golf-shoes",
    "title": "Andiamo Women's Waterproof Spikeless Golf Shoes",
    "src": "/store-images/shoes/golf-shoes/2000000058391-92-01_pc-b47bc62d8a.webp",
    "file": "2000000058391-92-01_pc-b47bc62d8a.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Pro V1 AIM Red, White, & Blue 1776",
    "src": "/store-images/equipment/golf-balls/2000000061434-01_pc-d7700b7e9f.webp",
    "file": "2000000061434-01_pc-d7700b7e9f.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Titleist TruFeel Double Dozen",
    "src": "/store-images/equipment/golf-balls/2000000061330-01_pc-cce49404c7.webp",
    "file": "2000000061330-01_pc-cce49404c7.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Z-Star Diamond 3 USA26 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000061106-01_pc-53d173f6e3.webp",
    "file": "2000000061106-01_pc-53d173f6e3.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Supersoft USA 250 Golf Balls 2026",
    "src": "/store-images/equipment/golf-balls/2000000059357-01_pc-1b849979d7.webp",
    "file": "2000000059357-01_pc-1b849979d7.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Chrome Tour 26 Golf Balls Cocktails",
    "src": "/store-images/equipment/golf-balls/2000000060165-01_pc-39569606d9.webp",
    "file": "2000000060165-01_pc-39569606d9.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Chrome Tour Triple Diamond Triple Track 26 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000061119-01_pc-41f81f4310.webp",
    "file": "2000000061119-01_pc-41f81f4310.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "TP5 PIX USA 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000058255-01_pc-1f583ca211.webp",
    "file": "2000000058255-01_pc-1f583ca211.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Tour Response Stripe 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000058166-96-01_pc-cdf80d6d19.webp",
    "file": "2000000058166-96-01_pc-cdf80d6d19.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "TP5 Hot Shot 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000061978-01_pc-48b027e4db.webp",
    "file": "2000000061978-01_pc-48b027e4db.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Supersoft Distressed Blue Stripe Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000060159-01_pc-69a8e17465.webp",
    "file": "2000000060159-01_pc-69a8e17465.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "TP5x MySymbol 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000042256-92-01_pc-73b40dc309.webp",
    "file": "2000000042256-92-01_pc-73b40dc309.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Velocity USA AIM Golf Balls 2026",
    "src": "/store-images/equipment/golf-balls/2000000061435-01_pc-3562b331d6.webp",
    "file": "2000000061435-01_pc-3562b331d6.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Chrome Tour Triple Diamond 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000061118-01_pc-93b0b7a203.webp",
    "file": "2000000061118-01_pc-93b0b7a203.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "TP5x Hot Shot 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000061979-01_pc-f350c67244.webp",
    "file": "2000000061979-01_pc-f350c67244.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "TP5x 2026 Personalized Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000042254-92-01_pc-ff0309cbac.webp",
    "file": "2000000042254-92-01_pc-ff0309cbac.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Tour Response Stripe USA 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000058263-92-01_pc-899aba1648.webp",
    "file": "2000000058263-92-01_pc-899aba1648.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Supersoft Mother's Day 26 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000060164-01_pc-6244504df0.webp",
    "file": "2000000060164-01_pc-6244504df0.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "TP5x PIX USA 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000058259-01_pc-c817162808.webp",
    "file": "2000000058259-01_pc-c817162808.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Pro V1 Georgia Tech Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000059503-01_pc-9933da1b38.webp",
    "file": "2000000059503-01_pc-9933da1b38.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Xtreme Tour Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000060903-01_pc-73118d72db.webp",
    "file": "2000000060903-01_pc-73118d72db.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Xtreme Tour X Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000060904-01_pc-b7b106e870.webp",
    "file": "2000000060904-01_pc-b7b106e870.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "TP5x Performance Stripe 2026 Golf Balls (6-Ball Pack)",
    "src": "/store-images/equipment/golf-balls/2000000061854-01_pc-ce82fa0d33.webp",
    "file": "2000000061854-01_pc-ce82fa0d33.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Tour Response 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000058262-92-01_pc-7bd37b5e01.webp",
    "file": "2000000058262-92-01_pc-7bd37b5e01.webp"
  },
  {
    "category": "equipment",
    "subcategory": "golf-balls",
    "title": "Chrome Tour Hotdog 2026 Golf Balls",
    "src": "/store-images/equipment/golf-balls/2000000061848-01_pc-097164aad7.webp",
    "file": "2000000061848-01_pc-097164aad7.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Destination North Carolina Blade Putter Headcover",
    "src": "/store-images/equipment/accessories-and-training/2000000052580-01_pc-cb1cd09eff.webp",
    "file": "2000000052580-01_pc-cb1cd09eff.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Club Scrub Pro",
    "src": "/store-images/equipment/accessories-and-training/2000000050257-01_pc-070a7c27c5.webp",
    "file": "2000000050257-01_pc-070a7c27c5.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Approach S44 Golf GPS Watch",
    "src": "/store-images/equipment/accessories-and-training/2000000050686-117-01_pc-e8807554a6.webp",
    "file": "2000000050686-117-01_pc-e8807554a6.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Titleist Players Golf Glove",
    "src": "/store-images/equipment/accessories-and-training/0200211000123-01_pc-51c422a3e2.webp",
    "file": "0200211000123-01_pc-51c422a3e2.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Putting Thing Training Aid",
    "src": "/store-images/equipment/accessories-and-training/2000000057993-01_pc-645c5bf741.webp",
    "file": "2000000057993-01_pc-645c5bf741.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "BucketGolf 6-Hole Golf Game Set",
    "src": "/store-images/equipment/accessories-and-training/2000000052373-01_pc-c9d8a07c8c.webp",
    "file": "2000000052373-01_pc-c9d8a07c8c.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Titleist Perma-Soft Golf Glove",
    "src": "/store-images/equipment/accessories-and-training/0200211000122-01_pc-65fbf4918c.webp",
    "file": "0200211000122-01_pc-65fbf4918c.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Club Dock Wall Bag Holder",
    "src": "/store-images/equipment/accessories-and-training/2000000057713-01_pc-807aedba5b.webp",
    "file": "2000000057713-01_pc-807aedba5b.webp"
  },
  {
    "category": "equipment",
    "subcategory": "accessories-and-training",
    "title": "Smart Sensors (GEN 4) Golf GPS Trackers",
    "src": "/store-images/equipment/accessories-and-training/2000000051490-01_pc-b31ab4af03.webp",
    "file": "2000000051490-01_pc-b31ab4af03.webp"
  }
];

/** Filter products by category (and optional subcategory), optionally limited. */
export const productsByCategory = (
  category: string,
  subcategory?: string,
  limit?: number,
): StoreProduct[] => {
  const list = storeProducts.filter(
    (p) => p.category === category && (!subcategory || p.subcategory === subcategory),
  );
  return typeof limit === "number" ? list.slice(0, limit) : list;
};

/** Recognizable golf brand logos for "Shop by Brand" strips. */
export const brandLogos: BrandLogo[] = [
  {
    "name": "Titleist",
    "src": "/store-images/logos/logo-Titleist-5191ae6257.webp"
  },
  {
    "name": "TaylorMade",
    "src": "/store-images/logos/logo-TaylorMade-2f17ac4849.webp"
  },
  {
    "name": "Callaway",
    "src": "/store-images/logos/logo-Callaway-f45fd4251f.webp"
  },
  {
    "name": "PING",
    "src": "/store-images/logos/logo-PING-3f87d394b0.webp"
  },
  {
    "name": "FootJoy",
    "src": "/store-images/logos/24_FJ_Jewel_K_3-063a2db0f2.webp"
  },
  {
    "name": "PUMA",
    "src": "/store-images/logos/logo-PUMA-7d1990d67a.webp"
  },
  {
    "name": "Srixon",
    "src": "/store-images/logos/logo-Srixon-8c85331b79.webp"
  },
  {
    "name": "Cobra",
    "src": "/store-images/logos/logo-COBRA-111ec06575.webp"
  }
];
