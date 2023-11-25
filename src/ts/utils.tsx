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

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

export interface Ripple {
  frontmatter: {
    date: string;
    draft: boolean;
  };
  url?: string;
  category?: string;
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
    const { date, draft } = ripple.frontmatter;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFutureRipples && new Date(date) > new Date()) return acc;

    // add ripple to acc
    acc.push(ripple);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredRipples.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
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
