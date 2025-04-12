var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// config/ebooks.ts
import { defineDocumentType } from "contentlayer/source-files";

// config/meta/index.ts
import {
  GenerateMetadata,
  toSlug
} from "@estarlincito/utils";
import { myebook } from "@repo/constants";

// config/meta/meta.ts
import { handleError, ObjectUtils } from "@estarlincito/utils";
var _Meta = class _Meta {
  constructor(metadata) {
    this.metadata = metadata;
    if (_Meta.instances.find((item) => item.title)) {
      handleError(
        "This item already exists in the instances of Meta config/meta/meta.ts"
      );
    }
    _Meta.instances.push(
      ObjectUtils.freeze({
        description: this.metadata.description,
        images: this.metadata.images,
        title: this.metadata.title
      })
    );
  }
  get meta() {
    return _Meta.instances;
  }
};
__publicField(_Meta, "instances", []);
var Meta = _Meta;
var meta_default = Meta;

// config/meta/author.ts
new meta_default({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
});
var meta_author = new meta_default({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
}).meta;
var author_default = meta_author;

// config/meta/genres.ts
new meta_default({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
});
var meta_genres = new meta_default({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
}).meta;
var genres_default = meta_genres;

// config/meta/publisher.ts
new meta_default({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
});
var meta_publisher = new meta_default({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
}).meta;
var publisher_default = meta_publisher;

// config/meta/index.ts
var { locale, siteName } = myebook;
var getMeta = (title, data) => {
  const value = data.find((item) => item.title === title);
  if (value === void 0) {
    throw new Error("This properties not fount on descriptions");
  }
  return value;
};
var meta = (doc) => {
  const ebook = GenerateMetadata.book({
    authors: doc.authors,
    description: doc.summary,
    images: [{ alt: doc.coverAlt, url: doc.cover }],
    isbn: doc.isbn,
    locale: "en-US",
    releaseDate: doc.released,
    siteName: "MyEbook",
    tags: doc.tags,
    title: doc.title,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug("doc")}`
  });
  const publisher = GenerateMetadata.website({
    locale,
    siteName,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug(doc.publisher)}`,
    ...getMeta(doc.publisher, publisher_default)
  });
  const genres = doc.genres._array.map(
    (genre) => GenerateMetadata.website({
      locale,
      siteName,
      url: `https://myebook.estarlincito.com/ebooks/${toSlug(genre)}`,
      ...getMeta(genre, genres_default)
    })
  );
  const authors = doc.authors._array.map(
    (author) => GenerateMetadata.website({
      locale,
      siteName,
      url: `https://myebook.estarlincito.com/ebooks/${toSlug(author)}`,
      ...getMeta(author, author_default)
    })
  );
  return { authors, ebook, genres, publisher };
};
var meta_default2 = meta;

// config/types/meta.ts
var base = `
    title: string;
    description: string;
    metadataBase: string;`;
var openGraph = `{
      type: string;
      siteName: string;
      locale: string;
      title: string;
      description: string;
      images: {
        width: number;
        height: number;
        url: string;
        alt: string;
      }[];
      url: string;
    };`;
var icons = `
    {
      icon: string;
      shortcut: string;
    };`;
var meta_types = `{
  authors: {
    ${base}
    openGraph: ${openGraph}
    icons: ${icons}
  }[];
  genres: {
    ${base}
    openGraph: ${openGraph}
    icons: ${icons}
  }[];
  publisher: {
    ${base}
    openGraph: ${openGraph}
    icons: ${icons}
  };
  ebook: {
  ${base}
  openGraph: {
    type: string;
    locale: string;
    siteName: string;
    authors: string[];
    releaseDate: string;
    tags: string[];
    description: string;
    title: string;
    images: {
      width: number;
      height: number;
      url: string;
      alt: string;
    }[];
    url: string;
  };
  icons: ${icons}
};
}`;
var meta_default3 = meta_types;

// config/computedFields.ts
var computedFields = {
  meta: {
    resolve: (doc) => {
      const { authors, genres, ebook, publisher } = meta_default2(doc);
      return {
        authors,
        ebook,
        genres,
        publisher
      };
    },
    type: meta_default3
  }
};

// config/ebooks.ts
var fields = {
  // authors: { of: { type: 'string' }, required: true, type: 'list' },
  cover: { required: true, type: "string" },
  coverAlt: { required: true, type: "string" },
  genres: { of: { type: "string" }, required: true, type: "list" },
  isbn: { required: true, type: "string" },
  language: { required: true, type: "string" },
  length: { required: true, type: "number" },
  publisher: { required: true, type: "string" },
  released: { required: true, type: "date" },
  size: { required: true, type: "number" },
  summary: { required: true, type: "string" },
  // tags: { of: { type: 'string' }, required: true, type: 'list' },
  title: { required: true, type: "string" }
};
var Ebooks = defineDocumentType(() => ({
  computedFields,
  contentType: "mdx",
  fields,
  filePathPattern: "**.mdx",
  name: "Ebooks"
}));
var ebooks_default = Ebooks;

// config/mdxOptions.ts
import remarkGfm from "remark-gfm";
var mdxOptions = {
  rehypePlugins: [],
  remarkPlugins: [remarkGfm]
};
var mdxOptions_default = mdxOptions;

// contentlayer.config.ts
var contentLayerConfig = makeSource({
  contentDirPath: "./public/ebooks",
  documentTypes: [ebooks_default],
  mdx: mdxOptions_default
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-K43CVWY4.mjs.map
