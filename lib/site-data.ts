export type NavItem = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  image: string;
  imageAlt: string;
  size: "feature" | "tall" | "wide" | "standard";
  badge?: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  tone?: "light" | "dark";
};

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
};

export const company = {
  name: "E.M. Harris Construction Company",
  shortName: "E.M. Harris",
  phoneDisplay: "314.436.4426",
  phoneHref: "tel:3144364426",
  addressLine1: "1900 Olive Street",
  addressLine2: "St. Louis, Missouri 63103",
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const homeStats: Stat[] = [
  { value: "35+", label: "Years operating in St. Louis" },
  { value: "500+", label: "Completed developments and renovations" },
  { value: "100%", label: "Commitment to schedule discipline" },
];

export const aboutStats: Stat[] = [
  { value: "35+", label: "Years of St. Louis operations" },
  { value: "500+", label: "Completed projects across the region" },
  { value: "40+", label: "Trusted public and private partners" },
];

export const capabilities = [
  {
    title: "Historic Preservation",
    body:
      "Adaptive reuse, masonry restoration, and detail-sensitive renovation work that protects architectural heritage while modernizing performance.",
  },
  {
    title: "Multi-Family Construction",
    body:
      "Ground-up and occupied-site delivery for affordable housing, mixed-use, and market-rate residential developments with disciplined phasing.",
  },
  {
    title: "Complex Funding Projects",
    body:
      "Project controls and documentation tailored for LIHTC, historic tax credits, HUD coordination, and budget-constrained capital stacks.",
  },
];

export const projects: Project[] = [
  {
    slug: "meridian-corporate-center",
    title: "The Meridian Corporate Center",
    category: "Commercial",
    year: "2024",
    blurb:
      "A sharp-lined office campus designed around daylight, efficient systems, and a flexible tenant experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4ruhqlaZ43OtyuZqW-2rVEJ4W0s1flFX-oOpNk5Iml377cSg4mOsp27N2s-1WKt2fs7pV1nPDGxyy7Bwr3jPEwMTAZHXz50B3CAxa6chJ_31v29ppXVinmtg6jDTFMT_Xb1lXnHnppKEK_Qk1yE3n-GBKLvINnxfxrQaK_bUftsM6fUpuPTVpgDwMf-w2iL1jWbvfRfswCZso4wUrsR5gqQ3zmv7-QNqgLzm3Sou_mZc23ycnBB-He670098xxX3dvCNxPgdZTIo",
    imageAlt:
      "Modern geometric glass and steel office building under a clear blue sky with sharp architectural angles and deep shadows.",
    size: "feature",
    badge: "Featured",
  },
  {
    slug: "southside-residences",
    title: "Southside Residences",
    category: "Multi-Family",
    year: "2023",
    blurb:
      "A multi-building residential community with durable materials, strong street presence, and resident-first amenities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD15FuqVWCcSR36U-1tao6bScJOtMNcbDgpPBSX3BZSc77e29CM6cpQLqivPznzI_msKDk_gQb6bvyNNkxUC2_J7cKpZsISoZndSmv5wNEQl6tP7tm-HjNti58rXRt_Y46_ZeYs1gSEa5tYPkGFneUL1dSnZ9BkhMBASUCvDjz77tsoUVmPp4mlivrw1usr57P7ULkgaoUcr8iVkr-3t4DrtkiVX4WVR8x_OG7RRcuKXd6XNwo2PssGxCfKDUH14iIAdsaml6g2RG8",
    imageAlt:
      "Luxury multi-family residential complex with modern balconies and warm evening lighting through large windows.",
    size: "tall",
  },
  {
    slug: "historic-post-office",
    title: "Historic Post Office Revitalization",
    category: "Historic Renovation",
    year: "2023",
    blurb:
      "Restoration of a landmark civic building, blending preservation standards with contemporary building systems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVUHW9wC70lzdh6e9AeuUMcKkYj8jr2XQF_7c0nmG9e4Vb_ohaSB_a0E8suY0p28Z09fULPHaNI_QnJyuP2ycD050qCKun3-O7Vp0_bmEHwEWwuG5V1N12JlbOHyNHgGgHCm8OMIzXlpYTFa49t7ehY_TkboJT9j12IgUvoqlcyPH62P4zZ0DrcNvzZ3SxRzyJIyXWcdlSZ3xtOUHBTcPeRTfalHRlyt7GZg-uU8GyX5siQF2fIBWaeKO30W-wgSE7LBrSh5qxids",
    imageAlt:
      "Detailed restoration of a classic red brick facade with ornate cornices and modern industrial windows.",
    size: "standard",
  },
  {
    slug: "gateway-lofts",
    title: "The Gateway Lofts",
    category: "Mixed-Use",
    year: "2025 Completion",
    blurb:
      "An active urban redevelopment project integrating retail frontage, residential density, and phased delivery.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qJOG8RNpw71VL59lXkxYMaZCtXoRnbmRtVUhur88YG7bgMznDa8Rzm-Jo-XjrArEC-xiaE19NZVuHHMMRQbTa7ueba0xUYSEts-q2pNy8HTkE2a17xCxSLA6e13ycxKLSPM0D6EQbQaKpTpHtr66UEHHIDbEL29h1Z5m5g5135IKNx9xuuPeztO7pWY2GxFp6PqOr9dyB_0Hk0dYSuQ86aHxyS_P22u4UEgC7xKmQTbvz6Wr1KI7UXHx4bZxBwYuoGC5pUijZNE",
    imageAlt:
      "Active construction site with heavy machinery and structural framing against a dramatic sunset sky.",
    size: "wide",
    badge: "Under Construction",
  },
  {
    slug: "apex-tech-campus",
    title: "Apex Tech Campus",
    category: "Commercial",
    year: "2022",
    blurb:
      "A clean-lined workplace environment with flexible suites, high-performance interiors, and public-facing amenities.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALooQy1RwQ4fc52ZPl6k792ibO9qSVXHddyC6LOepVpFiXgkZ_vGC8DRGNr2f4WRUwUnA-kg2w_CVH6BDQVSGOYPG3KaMYQGyqd7osV6xM4BGvWVRoh2ZGiVeq23o7YlsbJEgHwT_9F-cUJ4CvcsyOPrwBZOWJ2qGK4Sj-3XZf0NmEIfG2VqwmxBFbZN3xdbPVPzP7oM0zOBMaEZM0cVhnMpiDUmNBMi4Ux7WtVQDawosM_BwLacfRtrlDn-LpKsejRRf37GT8Onk",
    imageAlt:
      "Minimalist interior of a newly constructed high-end commercial space with polished concrete floors and large glass walls.",
    size: "standard",
  },
  {
    slug: "grand-theatre-restoration",
    title: "Grand Theatre Restoration",
    category: "Historic Renovation",
    year: "2021",
    blurb:
      "A restoration program focused on preserving ornate character while modernizing infrastructure behind the scenes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvvP-250TpBRQ8_l9q8NbfO_fdU1xIRXy2gIM_DAbPHDZ6jXkQ9iPn86SXy1aaYOgUSR1e9Ckvupgp7KZu3WkyQ9iYfL4IOt-DtpFllj-bnUbCKInxCULB2tFis1ba1TOPiY6_eh0AKnXY-zhD6smPyfbaRcm2x3FCkL0Vb39g3PjZJTnnd7g5jtaQnYbHo4zV2T5n_s7Dpwbi892Klh4Frj1PYP23MRBam1Oi8dWMP418F-Vs53PTimQiJOZBElck571PNhtzqhQ",
    imageAlt:
      "European style heritage building restoration focusing on the intersection of old stone and modern steel beams.",
    size: "standard",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    slug: "heritage-plaza-revival",
    title: "Groundbreaking: The Heritage Plaza Revival Project",
    category: "Project Milestone",
    date: "October 24, 2024",
    excerpt:
      "Our newest restoration launch combines nineteenth-century masonry, new building systems, and a sustainability-driven delivery strategy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGV43X2sWmj4ktuSKSGidMji2BQfh43I-gDEfZghkBnpgZX2IoP0hBvyshNdrIhUOwY60TbC30gkgWlN0EhLyfrMlFLxNi1td4fRTn5qgolPXvrCMJyWESeSoCG33joA14wwZgo25JJiAzFnmFp2KZDRkAwBiu0IM5bHpKPssQdPIvDrT39nWlyvB4v197uu19ySQcGik0HQZ92gxPbcOkLB7EdARdwhUN4vdJQp3RMta6pOjuglYMpNVrb8XXZ_-uHQ6ArWBne4Y",
    imageAlt:
      "Modern geometric skyscraper facade with reflective glass and deep blue architectural shadows during high noon.",
  },
  {
    slug: "construction-trades-scholarship",
    title: "Annual Construction Trades Scholarship",
    category: "Community",
    date: "October 18, 2024",
    excerpt:
      "Supporting the next generation of builders through vocational grants and local trade development partnerships.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCB_JQ8LYzOJz60ZbEqMJJIlEWW-o9A66FgsODJyYaprJLz-i1rmw05PByxF5e7a6-ynyqlYDF29-fxS4BwO-zdB_GmQERzZCayYQNS2Dqfb57lZDLkieVevdy7oJEeiLxF4RlHAX0xGYTgITbjuILVG2UdYB__zADBCTb0oVQnefqUoy-ofvxH-NXrPJPquJAhX3IovBQjjZVnEucwwCAX2x3sXcoLERGWDGM7YUzQlZ7SpP38i85qZw1GFUqW8zOhmy8ehqv-kOE",
    imageAlt:
      "Close up of carpenter hands working with premium oak wood in a sun-drenched industrial workshop.",
  },
  {
    slug: "iso-14001-certification",
    title: "ISO 14001 Certification Achieved",
    category: "Operations",
    date: "October 12, 2024",
    excerpt:
      "Recognition of our environmental management standards across active job sites and internal project controls.",
    tone: "dark",
  },
  {
    slug: "structural-steel-podcast",
    title: "The Evolution of Structural Steel in High-Rise Design",
    category: "Field Notes",
    date: "October 3, 2024",
    excerpt:
      "Technical Director James Harris shares how steel systems, procurement timing, and detailing continue to reshape urban construction.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDSr35xFntnoX8lCbSv7oHJulgxGzVJVmZU5xPqrVlYYRL1phk8XnSq0wT9BwM9NkAOhil7Uy63uqL4xuyKUHCQ6qvmkGzhKNpt6yY3qBAu9XkXZAcMeIeCHXyBJhhac4WMRWDpKAK6_ATVhndmIDGeu28YAYhskRpfHyxAOpqSHOvVzzhM8icBUHrYQydxyhmfrDyLLRACa0SnrpIkO3NxZCdKzc_KgAhaiz2qSinCi0JuZYkWiMI7laUW7WF-OKGssahHAwrL-8",
    imageAlt:
      "Low angle view of large yellow construction crane against a clear cobalt blue sky.",
  },
];

export const milestones = [
  {
    month: "SEP 2024",
    title: "Safety Excellence Award",
    body:
      "Recognized for surpassing 500,000 work hours without a recordable incident while sustaining disciplined site operations.",
  },
  {
    month: "AUG 2024",
    title: "Parkview Lofts Completion",
    body:
      "Delivered a 240-unit residential complex ahead of schedule with a clean turnover process and tight cost control.",
  },
  {
    month: "JUL 2024",
    title: "Historical Preservation Grant",
    body:
      "Awarded state support for the restoration of the Old Courthouse clock tower, reinforcing our preservation expertise.",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "1989",
    title: "The Foundation",
    body:
      "E.M. Harris opened in St. Louis with a reputation for residential excellence, structural discipline, and dependable project execution.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVro9fOXr4-mYS6T2cZrF22Tcxohby1D5lRndwB_7Wn1q9RVpLJlw2wg3uKOc2fh_uIZPAy1gGoiHE4pGKqtoBwseu8Lh5NX8O8CnRGqbdIhLl2tFbz2NRg6ynwPqIMc8nhDGWEIXBsNK6dD9LGI9dwjez9uAQP6kDXAQTXt4CPGNVQFa-NCczTEViYVvFbCt76DRKwUwBqRCcDsQmrIR6u0UAs1tz-H77IDRMe3fnSOVxCTFjKVqn8B-ZFF_svFcej47AAR_1wQ8",
    imageAlt:
      "Vintage photograph-style shot of a construction blueprint and antique surveying equipment on a wooden desk.",
  },
  {
    year: "2005",
    title: "Tax Credit Expansion",
    body:
      "The firm deepened its expertise in LIHTC and historic rehabilitation, becoming a trusted delivery partner for affordable housing development.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIvTieRuYm8PEfawUPUUWSb9iftfEQqsCDQQ3ccefegoc1xI8dBS3KLLSWebQDxjr0pg6L1YLt_9pCIgWwxDx0iaj5PvoJab4_lBABIWYQGTOF1zyeajphV16FHReIcukU7qzW0RdTlbzDIXvt2awCmOr3roYgjC47yFbjweFt2NADa63QGmZfoX47mZRQZaU0bcFo_fKGc1ry8FBXVG8RGZyKFcLVBFwcAsGPyXN_VvJSsd26GVqLNLa5iEDiBb7JU0VwdK7OZWg",
    imageAlt:
      "Close up of a modern brick multi-family housing development in a historic urban neighborhood under clear blue sky.",
  },
  {
    year: "Today",
    title: "Leading the Future",
    body:
      "The current portfolio spans preservation, commercial, and multi-family work with disciplined management for high-accountability funding structures.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkTaR6w6yGMJX6y3TV15Sxqw9koXCFTM6XHsbIEyHHHfMdDtb2s8o-ipo1DUv_uHy7SVsfnu79DP9dq-3kymamGIUajX92SAWPyhXCbWXUhgRamuJnfAAMpAcOqIHJ4lci9Jor4PLg3RgnmuVucwa6nBSVv4N_H5ezO8rXfFcrTHG0-v0yDOVu27f_FE49nYHpCgSH8mTUqnN5H5FYN1Eg_z0F8po1S2Y5RI0ymd6vPrtciEldXQy7FSQ7hXzD5FNbMkJhd38l5VE",
    imageAlt:
      "High-angle view of a bustling construction site with cranes and organized materials, symbolizing modern efficiency and growth.",
  },
];
