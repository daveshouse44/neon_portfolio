export interface Ripple {
  data: {
    title: string;
    pubDate: string;
    draft: boolean;
  };
  url?: string;
  category?: string;
}
export interface PageType {
  url: {
    prev: string;
    next: string;
  };
  data: Array<{
    data: {
      pubDate: string;
      draft: boolean;
    };
    url: string;
  }>;
}

const urlPrefix = "/ripples/";

export { urlPrefix };

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(pubDate: string) {
  return new Date(pubDate).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

export function formatRipples(
  ripples: Ripple[],
  {
    filterOutDrafts = true,
    filterOutFutureRipples = true,
    sortByDate = true,
    limit,
  }: {
    filterOutDrafts?: boolean;
    filterOutFutureRipples?: boolean;
    sortByDate?: boolean;
    limit?: number;
  } = {},
): Ripple[] {
  const filteredRipples = ripples.reduce((acc: Ripple[], ripple: Ripple) => {
    const { pubDate, draft } = ripple.data;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFutureRipples if true
    if (filterOutFutureRipples && new Date(pubDate) > new Date()) return acc;

    // add ripple to acc
    acc.push(ripple);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredRipples.sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime(),
    );
  } else {
    filteredRipples.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredRipples.slice(0, limit);
  }
  return filteredRipples;
}
