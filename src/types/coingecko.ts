export interface CoinsFetchData {
  id: string;
  symbol: string;
  name: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  localization: object;
  description: object;
  links: object;
  image: {
    thumb: string;
    small: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: {
    current_price: Record<Currency & string, number>;
    market_cap: Record<Currency & string, number>;
    total_volume: Record<Currency & string, number>;
    fully_diluted_valuation: Record<Currency & string, number>;
    total_value_locked: {
      btc: number;
      usd: number;
    };
    fdv_to_tvl_ratio: number;
    mcap_to_tvl_ratio: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
  };
  community_data: {
    facebook_likes: null | number;
    twitter_followers: number;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
    reddit_accounts_active_48h: string;
  };
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: { additions: number; deletions: number };
    commit_count_4_weeks: number;
  };
  public_interest_stats: { alexa_rank: number; bing_matches: null };
  last_updated: string;
  tickers: any[];
}

type Currency =
  | "aed"
  | "ars"
  | "aud"
  | "bch"
  | "bdt"
  | "bhd"
  | "bmd"
  | "bnb"
  | "brl"
  | "btc"
  | "cad"
  | "chf"
  | "clp"
  | "cny"
  | "czk"
  | "dkk"
  | "eos"
  | "eth"
  | "eur"
  | "gbp"
  | "hkd"
  | "huf"
  | "idr"
  | "ils"
  | "inr"
  | "jpy"
  | "krw"
  | "kwd"
  | "lkr"
  | "ltc"
  | "mmk"
  | "mxn"
  | "myr"
  | "ngn"
  | "nok"
  | "nzd"
  | "php"
  | "pkr"
  | "pln"
  | "rub"
  | "sar"
  | "sek"
  | "sgd"
  | "thb"
  | "try"
  | "twd"
  | "uah"
  | "usd"
  | "vef"
  | "vnd"
  | "xag"
  | "xau"
  | "xdr"
  | "xlm"
  | "xrp"
  | "zar"
  | "bits"
  | "link"
  | "sats";
