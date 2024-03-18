export interface HomeScreen {
    loading: boolean
    bestData: Best
    topData:Top
    newData:New
}

export interface New {
    kind: string
    data: Data
  }
  
  export interface Data {
    after: string
    dist: number
    modhash: any
    geo_filter: string
    children: Children[]
    before: any
  }
  
  export interface Children {
    kind: string
    data: Data2
  }
  
  export interface Data2 {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height?: number
    top_awarded_type: any
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color: any
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width?: number
    author_flair_template_id: any
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: boolean
    author_flair_css_class: any
    author_flair_richtext: any[]
    gildings: Gildings
    content_categories: any
    is_self: boolean
    mod_note: any
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html?: string
    likes: any
    suggested_sort?: string
    banned_at_utc: any
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    all_awardings: any[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text: any
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    num_reports: any
    distinguished: any
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    removal_reason: any
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color: any
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media
    is_video: boolean
    link_flair_template_id?: string
    post_hint?: string
    url_overridden_by_dest?: string
    preview?: Preview
  }
  
  export interface LinkFlairRichtext {
    e: string
    t: string
  }
  
  export interface MediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    height?: number
  }
  
  export interface SecureMedia {
    reddit_video?: RedditVideo
    type?: string
    oembed?: Oembed
  }
  
  export interface RedditVideo {
    bitrate_kbps: number
    fallback_url: string
    has_audio: boolean
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface Oembed {
    provider_url: string
    version: string
    title: string
    type: string
    thumbnail_width: number
    height: number
    width: number
    html: string
    author_name: string
    provider_name: string
    thumbnail_url: string
    thumbnail_height: number
    author_url: string
  }
  
  export interface SecureMediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    media_domain_url?: string
    height?: number
  }
  
  export interface Gildings {}
  
  export interface Media {
    reddit_video?: RedditVideo2
    type?: string
    oembed?: Oembed2
  }
  
  export interface RedditVideo2 {
    bitrate_kbps: number
    fallback_url: string
    has_audio: boolean
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface Oembed2 {
    provider_url: string
    version: string
    title: string
    type: string
    thumbnail_width: number
    height: number
    width: number
    html: string
    author_name: string
    provider_name: string
    thumbnail_url: string
    thumbnail_height: number
    author_url: string
  }
  
  export interface Preview {
    images: Image[]
    enabled: boolean
  }
  
  export interface Image {
    source: Source
    resolutions: Resolution[]
    variants: Variants
    id: string
  }
  
  export interface Source {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution {
    url: string
    width: number
    height: number
  }
  
  export interface Variants {}
  

export interface Top {
    kind: string
    data: Data
  }

  
  export interface Data {
    after: string
    dist: number
    modhash: any
    geo_filter: string
    children: Children[]
    before: any
  }
  
  export interface Children {
    kind: string
    data: Data2
  }
  
  export interface Data2 {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls?: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height?: number
    top_awarded_type: any
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color?: string
    upvote_ratio: number
    author_flair_background_color: any
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width?: number
    author_flair_template_id: any
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: boolean
    author_flair_css_class: any
    author_flair_richtext: any[]
    gildings: Gildings
    post_hint?: string
    content_categories?: string[]
    is_self: boolean
    mod_note: any
    created: number
    link_flair_type: string
    wls?: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html: any
    likes: any
    suggested_sort: any
    banned_at_utc: any
    url_overridden_by_dest?: string
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview?: Preview
    all_awardings: any[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text: any
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    num_reports: any
    distinguished: any
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    removal_reason: any
    link_flair_background_color?: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status?: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color: any
    permalink: string
    parent_whitelist_status?: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media
    is_video: boolean
    is_gallery?: boolean
    media_metadata?: MediaMetadata
    gallery_data?: GalleryData
  }
  
  export interface LinkFlairRichtext {
    e: string
    t: string
  }
  
  export interface MediaEmbed {}
  
  export interface SecureMedia {
    reddit_video: RedditVideo
  }
  
  export interface RedditVideo {
    bitrate_kbps: number
    fallback_url: string
    has_audio: boolean
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface SecureMediaEmbed {}
  
  export interface Gildings {}
  
  export interface Preview {
    images: Image[]
    enabled: boolean
  }
  
  export interface Image {
    source: Source
    resolutions: Resolution[]
    variants: Variants
    id: string
  }
  
  export interface Source {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution {
    url: string
    width: number
    height: number
  }
  
  export interface Variants {
    obfuscated?: Obfuscated
    nsfw?: Nsfw
  }
  
  export interface Obfuscated {
    source: Source2
    resolutions: Resolution2[]
  }
  
  export interface Source2 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution2 {
    url: string
    width: number
    height: number
  }
  
  export interface Nsfw {
    source: Source3
    resolutions: Resolution3[]
  }
  
  export interface Source3 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution3 {
    url: string
    width: number
    height: number
  }
  
  export interface Media {
    reddit_video: RedditVideo2
  }
  
  export interface RedditVideo2 {
    bitrate_kbps: number
    fallback_url: string
    has_audio: boolean
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface MediaMetadata {
    "8tutquzqdpoc1": N8tutquzqdpoc1
    bv0ncvzqdpoc1: Bv0ncvzqdpoc1
    ysmca10rdpoc1: Ysmca10rdpoc1
    q7r6a10rdpoc1: Q7r6a10rdpoc1
    f83so10rdpoc1: F83so10rdpoc1
    gt3l9uzqdpoc1: Gt3l9uzqdpoc1
    gd900vzqdpoc1: Gd900vzqdpoc1
    vjkriuzqdpoc1: Vjkriuzqdpoc1
    jssxnuzqdpoc1: Jssxnuzqdpoc1
    "0mi55uzqdpoc1": N0mi55uzqdpoc1
    nzopauzqdpoc1: Nzopauzqdpoc1
    "5hjvf00rdpoc1": N5hjvf00rdpoc1
    a46tttzqdpoc1: A46tttzqdpoc1
    gt9uy10rdpoc1: Gt9uy10rdpoc1
    qbbzj00rdpoc1: Qbbzj00rdpoc1
  }
  
  export interface N8tutquzqdpoc1 {
    status: string
    e: string
    m: string
    p: P[]
    s: S
    id: string
  }
  
  export interface P {
    y: number
    x: number
    u: string
  }
  
  export interface S {
    y: number
    x: number
    u: string
  }
  
  export interface Bv0ncvzqdpoc1 {
    status: string
    e: string
    m: string
    p: P2[]
    s: S2
    id: string
  }
  
  export interface P2 {
    y: number
    x: number
    u: string
  }
  
  export interface S2 {
    y: number
    x: number
    u: string
  }
  
  export interface Ysmca10rdpoc1 {
    status: string
    e: string
    m: string
    p: P3[]
    s: S3
    id: string
  }
  
  export interface P3 {
    y: number
    x: number
    u: string
  }
  
  export interface S3 {
    y: number
    x: number
    u: string
  }
  
  export interface Q7r6a10rdpoc1 {
    status: string
    e: string
    m: string
    p: P4[]
    s: S4
    id: string
  }
  
  export interface P4 {
    y: number
    x: number
    u: string
  }
  
  export interface S4 {
    y: number
    x: number
    u: string
  }
  
  export interface F83so10rdpoc1 {
    status: string
    e: string
    m: string
    p: P5[]
    s: S5
    id: string
  }
  
  export interface P5 {
    y: number
    x: number
    u: string
  }
  
  export interface S5 {
    y: number
    x: number
    u: string
  }
  
  export interface Gt3l9uzqdpoc1 {
    status: string
    e: string
    m: string
    p: P6[]
    s: S6
    id: string
  }
  
  export interface P6 {
    y: number
    x: number
    u: string
  }
  
  export interface S6 {
    y: number
    x: number
    u: string
  }
  
  export interface Gd900vzqdpoc1 {
    status: string
    e: string
    m: string
    p: P7[]
    s: S7
    id: string
  }
  
  export interface P7 {
    y: number
    x: number
    u: string
  }
  
  export interface S7 {
    y: number
    x: number
    u: string
  }
  
  export interface Vjkriuzqdpoc1 {
    status: string
    e: string
    m: string
    p: P8[]
    s: S8
    id: string
  }
  
  export interface P8 {
    y: number
    x: number
    u: string
  }
  
  export interface S8 {
    y: number
    x: number
    u: string
  }
  
  export interface Jssxnuzqdpoc1 {
    status: string
    e: string
    m: string
    p: P9[]
    s: S9
    id: string
  }
  
  export interface P9 {
    y: number
    x: number
    u: string
  }
  
  export interface S9 {
    y: number
    x: number
    u: string
  }
  
  export interface N0mi55uzqdpoc1 {
    status: string
    e: string
    m: string
    p: P10[]
    s: S10
    id: string
  }
  
  export interface P10 {
    y: number
    x: number
    u: string
  }
  
  export interface S10 {
    y: number
    x: number
    u: string
  }
  
  export interface Nzopauzqdpoc1 {
    status: string
    e: string
    m: string
    p: P11[]
    s: S11
    id: string
  }
  
  export interface P11 {
    y: number
    x: number
    u: string
  }
  
  export interface S11 {
    y: number
    x: number
    u: string
  }
  
  export interface N5hjvf00rdpoc1 {
    status: string
    e: string
    m: string
    p: P12[]
    s: S12
    id: string
  }
  
  export interface P12 {
    y: number
    x: number
    u: string
  }
  
  export interface S12 {
    y: number
    x: number
    u: string
  }
  
  export interface A46tttzqdpoc1 {
    status: string
    e: string
    m: string
    p: P13[]
    s: S13
    id: string
  }
  
  export interface P13 {
    y: number
    x: number
    u: string
  }
  
  export interface S13 {
    y: number
    x: number
    u: string
  }
  
  export interface Gt9uy10rdpoc1 {
    status: string
    e: string
    m: string
    p: P14[]
    s: S14
    id: string
  }
  
  export interface P14 {
    y: number
    x: number
    u: string
  }
  
  export interface S14 {
    y: number
    x: number
    u: string
  }
  
  export interface Qbbzj00rdpoc1 {
    status: string
    e: string
    m: string
    p: P15[]
    s: S15
    id: string
  }
  
  export interface P15 {
    y: number
    x: number
    u: string
  }
  
  export interface S15 {
    y: number
    x: number
    u: string
  }
  
  export interface GalleryData {
    items: Item[]
  }
  
  export interface Item {
    media_id: string
    id: number
  }
  


export interface Best {
    kind: string
    data: Data
}

export interface Data {
    after: string
    dist: number
    modhash: any
    geo_filter: any
    children: Children[]
    before: any
}

export interface Children {
    kind: string
    data: Data2
}

export interface Data2 {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls?: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height?: number
    top_awarded_type: any
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color?: string
    upvote_ratio: number
    author_flair_background_color: any
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width?: number
    author_flair_template_id: any
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: any
    author_flair_css_class: any
    author_flair_richtext: any[]
    gildings: Gildings
    post_hint?: string
    content_categories?: string[]
    is_self: boolean
    subreddit_type: string
    created: number
    link_flair_type: string
    wls?: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html?: string
    likes: any
    suggested_sort?: string
    banned_at_utc: any
    url_overridden_by_dest?: string
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview?: Preview
    all_awardings: any[]
    awarders: any[]
    media_only: boolean
    link_flair_template_id?: string
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text: any
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    mod_note: any
    distinguished: any
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    num_reports: any
    removal_reason: any
    link_flair_background_color?: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status?: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color: any
    permalink: string
    parent_whitelist_status?: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media
    is_video: boolean
    is_gallery?: boolean
    media_metadata?: MediaMetadata
    gallery_data?: GalleryData
}

export interface LinkFlairRichtext {
    a?: string
    e: string
    u?: string
    t?: string
}

export interface MediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    height?: number
}

export interface SecureMedia {
    oembed: Oembed
    type: string
}

export interface Oembed {
    provider_url: string
    title: string
    html: string
    thumbnail_width: number
    height: number
    width: number
    version: string
    author_name: string
    provider_name: string
    thumbnail_url: string
    type: string
    thumbnail_height: number
    author_url: string
}

export interface SecureMediaEmbed {
    content?: string
    width?: number
    scrolling?: boolean
    media_domain_url?: string
    height?: number
}

export interface Gildings { }

export interface Preview {
    images: Image[]
    enabled: boolean
}

export interface Image {
    source: Source
    resolutions: Resolution[]
    variants: Variants
    id: string
}

export interface Source {
    url: string
    width: number
    height: number
}

export interface Resolution {
    url: string
    width: number
    height: number
}

export interface Variants { }

export interface Media {
    oembed: Oembed2
    type: string
}

export interface Oembed2 {
    provider_url: string
    title: string
    html: string
    thumbnail_width: number
    height: number
    width: number
    version: string
    author_name: string
    provider_name: string
    thumbnail_url: string
    type: string
    thumbnail_height: number
    author_url: string
}

export interface MediaMetadata {
    qvy9ln2x0moc1: Qvy9ln2x0moc1
    n0r8ho2x0moc1: N0r8ho2x0moc1
    pj6pkn2x0moc1: Pj6pkn2x0moc1
}

export interface Qvy9ln2x0moc1 {
    status: string
    e: string
    m: string
    p: P[]
    s: S
    id: string
}

export interface P {
    y: number
    x: number
    u: string
}

export interface S {
    y: number
    x: number
    u: string
}

export interface N0r8ho2x0moc1 {
    status: string
    e: string
    m: string
    p: P2[]
    s: S2
    id: string
}

export interface P2 {
    y: number
    x: number
    u: string
}

export interface S2 {
    y: number
    x: number
    u: string
}

export interface Pj6pkn2x0moc1 {
    status: string
    e: string
    m: string
    p: P3[]
    s: S3
    id: string
}

export interface P3 {
    y: number
    x: number
    u: string
}

export interface S3 {
    y: number
    x: number
    u: string
}

export interface GalleryData {
    items: Item[]
}

export interface Item {
    media_id: string
    id: number
}
