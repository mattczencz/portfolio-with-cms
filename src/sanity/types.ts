/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Technology = {
  _id: string;
  _type: 'technology';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  url?: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type Project = {
  _id: string;
  _type: 'project';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  shortDesc?: string;
  details?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  technology?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'technology';
  }>;
  liveLink?: string;
  repoLink?: string;
  platform?: 'website' | 'app' | 'both';
  inProgress?: boolean;
  projectType?: 'personal' | 'professional';
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Technology
  | Project
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../portfolio-with-cms/src/sanity/queries/projects.ts
// Variable: PROJECTS_HOME_QUERY
// Query: *[  _type == "project"]|order(orderRank){  _id,  name,  slug,  "image": image.asset-> {     url,    label,    title,    altText,    description  },  inProgress,  platform,  shortDesc,  repoLink,  liveLink,  technology[]->{    name,    url,    "icon": icon.asset-> {       url,      label,      title,      altText,      description    }  }}
export type PROJECTS_HOME_QUERYResult = Array<{
  _id: string;
  name: string | null;
  slug: Slug | null;
  image: {
    url: string | null;
    label: string | null;
    title: string | null;
    altText: string | null;
    description: string | null;
  } | null;
  inProgress: boolean | null;
  platform: 'app' | 'both' | 'website' | null;
  shortDesc: string | null;
  repoLink: string | null;
  liveLink: string | null;
  technology: Array<{
    name: string | null;
    url: string | null;
    icon: {
      url: string | null;
      label: string | null;
      title: string | null;
      altText: string | null;
      description: string | null;
    } | null;
  }> | null;
}>;
// Variable: PROJECT_SINGLE_QUERY
// Query: *[  _type == "project" &&  slug.current == $slug  ][0]{  ...,  technology[]->{    name,    url,    icon  },}
export type PROJECT_SINGLE_QUERYResult = {
  _id: string;
  _type: 'project';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  shortDesc?: string;
  details?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
    listItem?: 'bullet' | 'number';
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
  technology: Array<{
    name: string | null;
    url: string | null;
    icon: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    } | null;
  }> | null;
  liveLink?: string;
  repoLink?: string;
  platform?: 'app' | 'both' | 'website';
  inProgress?: boolean;
  projectType?: 'personal' | 'professional';
} | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[\n  _type == "project"\n]|order(orderRank){\n  _id,\n  name,\n  slug,\n  "image": image.asset-> { \n    url,\n    label,\n    title,\n    altText,\n    description\n  },\n  inProgress,\n  platform,\n  shortDesc,\n  repoLink,\n  liveLink,\n  technology[]->{\n    name,\n    url,\n    "icon": icon.asset-> { \n      url,\n      label,\n      title,\n      altText,\n      description\n    }\n  }\n}': PROJECTS_HOME_QUERYResult;
    '*[\n  _type == "project" &&\n  slug.current == $slug  \n][0]{\n  ...,\n  technology[]->{\n    name,\n    url,\n    icon\n  },\n}': PROJECT_SINGLE_QUERYResult;
  }
}
