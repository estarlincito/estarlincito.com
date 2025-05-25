var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";

// config/ebooks.ts
import { defineDocumentType } from "contentlayer/source-files";

// config/meta/index.ts
import { locale, siteName, url } from "@app/myebook/settings";
import { GenerateMetadata, toSlug } from "@estarlincito/utils";

// config/meta/meta.ts
import { ObjectUtils, throwAppError } from "@estarlincito/utils";
var _Meta = class _Meta {
  constructor(metadata) {
    this.metadata = metadata;
    if (_Meta.instances.find((item) => item.title)) {
      throwAppError(
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

// config/meta/author.ts
new Meta({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
});
var metaAuthor = new Meta({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
}).meta;

// config/meta/genres.ts
new Meta({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
});
var metaGenres = new Meta({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
}).meta;

// config/meta/publisher.ts
new Meta({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
});
var metaPublisher = new Meta({
  description: "",
  images: [{ alt: "", url: "" }],
  title: ""
}).meta;

// config/meta/index.ts
var getMeta = (title, data) => {
  const value = data.find((item) => item.title === title);
  if (value === void 0) {
    throw new Error("This properties not fount on descriptions");
  }
  console.log(url);
  return value;
};
var meta = (doc) => {
  const ebook = GenerateMetadata.book({
    authors: doc.authors._array,
    description: doc.summary,
    images: [{ alt: doc.coverAlt, url: doc.cover }],
    isbn: doc.isbn,
    locale,
    releaseDate: doc.released,
    siteName,
    tags: doc.tags._array,
    title: doc.title,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug("doc")}`
  });
  const publisher = GenerateMetadata.website({
    locale,
    siteName,
    url: `https://myebook.estarlincito.com/ebooks/${toSlug(doc.publisher)}`,
    ...getMeta(doc.publisher, metaPublisher)
  });
  const genres = doc.genres._array.map(
    (genre) => GenerateMetadata.website({
      locale,
      siteName,
      url: `https://myebook.estarlincito.com/ebooks/${toSlug(genre)}`,
      ...getMeta(genre, metaGenres)
    })
  );
  const authors = doc.authors._array.map(
    (author) => GenerateMetadata.website({
      locale,
      siteName,
      url: `https://myebook.estarlincito.com/ebooks/${toSlug(author)}`,
      ...getMeta(author, metaAuthor)
    })
  );
  return { authors, ebook, genres, publisher };
};

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
var metaTypes = `{
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

// config/computedFields.ts
var computedFields = {
  meta: {
    resolve: (doc) => {
      const { authors, genres, ebook, publisher } = meta(doc);
      return {
        authors,
        ebook,
        genres,
        publisher
      };
    },
    type: metaTypes
  }
};

// config/ebooks.ts
var fields = {
  authors: { of: { type: "string" }, required: true, type: "list" },
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
  tags: { of: { type: "string" }, required: true, type: "list" },
  title: { required: true, type: "string" }
};
var Ebooks = defineDocumentType(() => ({
  computedFields,
  contentType: "mdx",
  fields,
  filePathPattern: "**.mdx",
  name: "Ebooks"
}));

// config/mdxOptions.ts
import remarkGfm from "remark-gfm";
var mdxOptions = {
  rehypePlugins: [],
  remarkPlugins: [remarkGfm]
};

// contentlayer.config.ts
var contentLayerConfig = makeSource({
  contentDirPath: "./public/ebooks",
  documentTypes: [Ebooks],
  mdx: mdxOptions
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5LRUXGLC.mjs.map
