export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageBlocksDynamicZoneInput: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Chef = {
  __typename?: 'Chef';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dishes?: Maybe<DishRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workingWithUs?: Maybe<Scalars['String']['output']>;
};


export type ChefDishesArgs = {
  filters?: InputMaybe<DishFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ChefEntity = {
  __typename?: 'ChefEntity';
  attributes?: Maybe<Chef>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChefEntityResponse = {
  __typename?: 'ChefEntityResponse';
  data?: Maybe<ChefEntity>;
};

export type ChefEntityResponseCollection = {
  __typename?: 'ChefEntityResponseCollection';
  data: Array<ChefEntity>;
  meta: ResponseCollectionMeta;
};

export type ChefFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ChefFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dishes?: InputMaybe<DishFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ChefFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChefFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workingWithUs?: InputMaybe<StringFilterInput>;
};

export type ChefInput = {
  dishes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workingWithUs?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentBlocksContactBlock = {
  __typename?: 'ComponentBlocksContactBlock';
  heading1: Scalars['String']['output'];
  heading2: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentBlocksContactHero = {
  __typename?: 'ComponentBlocksContactHero';
  contactHeroHeading: Scalars['String']['output'];
  contactHeroImage: UploadFileEntityResponse;
  id: Scalars['ID']['output'];
};

export type ComponentBlocksDishesServedHero = {
  __typename?: 'ComponentBlocksDishesServedHero';
  heroHeading: Scalars['String']['output'];
  heroImage: UploadFileEntityResponse;
  id: Scalars['ID']['output'];
};

export type ComponentBlocksDishesServedOverview = {
  __typename?: 'ComponentBlocksDishesServedOverview';
  heading: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentBlocksFoodMakingProcess = {
  __typename?: 'ComponentBlocksFoodMakingProcess';
  heading: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  process?: Maybe<Array<Maybe<ComponentProcessofmakingfoodProcessofmakingfood>>>;
};


export type ComponentBlocksFoodMakingProcessProcessArgs = {
  filters?: InputMaybe<ComponentProcessofmakingfoodProcessofmakingfoodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentBlocksOurChefs = {
  __typename?: 'ComponentBlocksOurChefs';
  chefHeading: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentBlocksRichText = {
  __typename?: 'ComponentBlocksRichText';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type ComponentBlocksSingleImage = {
  __typename?: 'ComponentBlocksSingleImage';
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
};

export type ComponentBlocksUsp = {
  __typename?: 'ComponentBlocksUsp';
  id: Scalars['ID']['output'];
  sectionHeading: Scalars['String']['output'];
};

export type ComponentContactInfoContactInfo = {
  __typename?: 'ComponentContactInfoContactInfo';
  content?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentContactInfoContactInfoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactInfoContactInfoFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContactInfoContactInfoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactInfoContactInfoFiltersInput>>>;
};

export type ComponentContactInfoContactInfoInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentNavItem = {
  __typename?: 'ComponentNavItem';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentNavItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavItemFiltersInput>>>;
  not?: InputMaybe<ComponentNavItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentNavItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProcessofmakingfoodProcessofmakingfood = {
  __typename?: 'ComponentProcessofmakingfoodProcessofmakingfood';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ComponentProcessofmakingfoodProcessofmakingfoodFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProcessofmakingfoodProcessofmakingfoodFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProcessofmakingfoodProcessofmakingfoodFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProcessofmakingfoodProcessofmakingfoodFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentWorkingHourOpenTime = {
  __typename?: 'ComponentWorkingHourOpenTime';
  closingHour: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  openHour: Scalars['Time']['output'];
};

export type ComponentWorkingHourOpenTimeInput = {
  closingHour?: InputMaybe<Scalars['Time']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  openHour?: InputMaybe<Scalars['Time']['input']>;
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  contactInfo?: Maybe<Array<Maybe<ComponentContactInfoContactInfo>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContactInfoContactInfoArgs = {
  filters?: InputMaybe<ComponentContactInfoContactInfoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactInfoEntity = {
  __typename?: 'ContactInfoEntity';
  attributes?: Maybe<ContactInfo>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactInfoEntityResponse = {
  __typename?: 'ContactInfoEntityResponse';
  data?: Maybe<ContactInfoEntity>;
};

export type ContactInfoInput = {
  contactInfo?: InputMaybe<Array<InputMaybe<ComponentContactInfoContactInfoInput>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Dish = {
  __typename?: 'Dish';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dishImage: UploadFileEntityResponse;
  dishes_categories?: Maybe<DishesCategoryRelationResponseCollection>;
  ingredients: Scalars['String']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DishDishes_CategoriesArgs = {
  filters?: InputMaybe<DishesCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DishEntity = {
  __typename?: 'DishEntity';
  attributes?: Maybe<Dish>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DishEntityResponse = {
  __typename?: 'DishEntityResponse';
  data?: Maybe<DishEntity>;
};

export type DishEntityResponseCollection = {
  __typename?: 'DishEntityResponseCollection';
  data: Array<DishEntity>;
  meta: ResponseCollectionMeta;
};

export type DishFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DishFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dishes_categories?: InputMaybe<DishesCategoryFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  ingredients?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DishFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DishFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DishInput = {
  dishImage?: InputMaybe<Scalars['ID']['input']>;
  dishes_categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DishRelationResponseCollection = {
  __typename?: 'DishRelationResponseCollection';
  data: Array<DishEntity>;
};

export type DishesCategory = {
  __typename?: 'DishesCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dishes?: Maybe<DishRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DishesCategoryDishesArgs = {
  filters?: InputMaybe<DishFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DishesCategoryEntity = {
  __typename?: 'DishesCategoryEntity';
  attributes?: Maybe<DishesCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DishesCategoryEntityResponse = {
  __typename?: 'DishesCategoryEntityResponse';
  data?: Maybe<DishesCategoryEntity>;
};

export type DishesCategoryEntityResponseCollection = {
  __typename?: 'DishesCategoryEntityResponseCollection';
  data: Array<DishesCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type DishesCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DishesCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dishes?: InputMaybe<DishFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DishesCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DishesCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DishesCategoryInput = {
  dishes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DishesCategoryRelationResponseCollection = {
  __typename?: 'DishesCategoryRelationResponseCollection';
  data: Array<DishesCategoryEntity>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Chef | ComponentBlocksContactBlock | ComponentBlocksContactHero | ComponentBlocksDishesServedHero | ComponentBlocksDishesServedOverview | ComponentBlocksFoodMakingProcess | ComponentBlocksOurChefs | ComponentBlocksRichText | ComponentBlocksSingleImage | ComponentBlocksUsp | ComponentContactInfoContactInfo | ComponentNavItem | ComponentProcessofmakingfoodProcessofmakingfood | ComponentWorkingHourOpenTime | ContactInfo | Dish | DishesCategory | HomeSpecialDish | I18NLocale | Navigation | OpeningHour | Page | TopHeader | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomeSpecialDish = {
  __typename?: 'HomeSpecialDish';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image: UploadFileEntityResponse;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomeSpecialDishEntity = {
  __typename?: 'HomeSpecialDishEntity';
  attributes?: Maybe<HomeSpecialDish>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomeSpecialDishEntityResponse = {
  __typename?: 'HomeSpecialDishEntityResponse';
  data?: Maybe<HomeSpecialDishEntity>;
};

export type HomeSpecialDishEntityResponseCollection = {
  __typename?: 'HomeSpecialDishEntityResponseCollection';
  data: Array<HomeSpecialDishEntity>;
  meta: ResponseCollectionMeta;
};

export type HomeSpecialDishFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomeSpecialDishFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HomeSpecialDishFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomeSpecialDishFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomeSpecialDishInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createChef?: Maybe<ChefEntityResponse>;
  createDish?: Maybe<DishEntityResponse>;
  createDishesCategory?: Maybe<DishesCategoryEntityResponse>;
  createHomeSpecialDish?: Maybe<HomeSpecialDishEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteChef?: Maybe<ChefEntityResponse>;
  deleteContactInfo?: Maybe<ContactInfoEntityResponse>;
  deleteDish?: Maybe<DishEntityResponse>;
  deleteDishesCategory?: Maybe<DishesCategoryEntityResponse>;
  deleteHomeSpecialDish?: Maybe<HomeSpecialDishEntityResponse>;
  deleteNavigation?: Maybe<NavigationEntityResponse>;
  deleteOpeningHour?: Maybe<OpeningHourEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteTopHeader?: Maybe<TopHeaderEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateChef?: Maybe<ChefEntityResponse>;
  updateContactInfo?: Maybe<ContactInfoEntityResponse>;
  updateDish?: Maybe<DishEntityResponse>;
  updateDishesCategory?: Maybe<DishesCategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomeSpecialDish?: Maybe<HomeSpecialDishEntityResponse>;
  updateNavigation?: Maybe<NavigationEntityResponse>;
  updateOpeningHour?: Maybe<OpeningHourEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateTopHeader?: Maybe<TopHeaderEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateChefArgs = {
  data: ChefInput;
};


export type MutationCreateDishArgs = {
  data: DishInput;
};


export type MutationCreateDishesCategoryArgs = {
  data: DishesCategoryInput;
};


export type MutationCreateHomeSpecialDishArgs = {
  data: HomeSpecialDishInput;
};


export type MutationCreatePageArgs = {
  data: PageInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteChefArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDishArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDishesCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteHomeSpecialDishArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateChefArgs = {
  data: ChefInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContactInfoArgs = {
  data: ContactInfoInput;
};


export type MutationUpdateDishArgs = {
  data: DishInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateDishesCategoryArgs = {
  data: DishesCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomeSpecialDishArgs = {
  data: HomeSpecialDishInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNavigationArgs = {
  data: NavigationInput;
};


export type MutationUpdateOpeningHourArgs = {
  data: OpeningHourInput;
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTopHeaderArgs = {
  data: TopHeaderInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Navigation = {
  __typename?: 'Navigation';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  navItems?: Maybe<Array<Maybe<ComponentNavItem>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NavigationNavItemsArgs = {
  filters?: InputMaybe<ComponentNavItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavigationEntity = {
  __typename?: 'NavigationEntity';
  attributes?: Maybe<Navigation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NavigationEntityResponse = {
  __typename?: 'NavigationEntityResponse';
  data?: Maybe<NavigationEntity>;
};

export type NavigationInput = {
  navItems?: InputMaybe<Array<InputMaybe<ComponentNavItemInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OpeningHour = {
  __typename?: 'OpeningHour';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  openTimings?: Maybe<ComponentWorkingHourOpenTime>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workingDays: Scalars['String']['output'];
};

export type OpeningHourEntity = {
  __typename?: 'OpeningHourEntity';
  attributes?: Maybe<OpeningHour>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type OpeningHourEntityResponse = {
  __typename?: 'OpeningHourEntityResponse';
  data?: Maybe<OpeningHourEntity>;
};

export type OpeningHourInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  openTimings?: InputMaybe<ComponentWorkingHourOpenTimeInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workingDays?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  blocks?: Maybe<Array<Maybe<PageBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageBlocksDynamicZone = ComponentBlocksContactBlock | ComponentBlocksContactHero | ComponentBlocksDishesServedHero | ComponentBlocksDishesServedOverview | ComponentBlocksFoodMakingProcess | ComponentBlocksOurChefs | ComponentBlocksRichText | ComponentBlocksSingleImage | ComponentBlocksUsp | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  blocks?: InputMaybe<Array<Scalars['PageBlocksDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  chef?: Maybe<ChefEntityResponse>;
  chefs?: Maybe<ChefEntityResponseCollection>;
  contactInfo?: Maybe<ContactInfoEntityResponse>;
  dish?: Maybe<DishEntityResponse>;
  dishes?: Maybe<DishEntityResponseCollection>;
  dishesCategories?: Maybe<DishesCategoryEntityResponseCollection>;
  dishesCategory?: Maybe<DishesCategoryEntityResponse>;
  homeSpecialDish?: Maybe<HomeSpecialDishEntityResponse>;
  homeSpecialDishes?: Maybe<HomeSpecialDishEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navigation?: Maybe<NavigationEntityResponse>;
  openingHour?: Maybe<OpeningHourEntityResponse>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  topHeader?: Maybe<TopHeaderEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryChefArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryChefsArgs = {
  filters?: InputMaybe<ChefFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContactInfoArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDishArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDishesArgs = {
  filters?: InputMaybe<DishFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDishesCategoriesArgs = {
  filters?: InputMaybe<DishesCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDishesCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryHomeSpecialDishArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryHomeSpecialDishesArgs = {
  filters?: InputMaybe<HomeSpecialDishFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigationArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOpeningHourArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTopHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TopHeader = {
  __typename?: 'TopHeader';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  leftLinks?: Maybe<Array<Maybe<ComponentNavItem>>>;
  logoSubtitle?: Maybe<Scalars['String']['output']>;
  logoTitle?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TopHeaderLeftLinksArgs = {
  filters?: InputMaybe<ComponentNavItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TopHeaderEntity = {
  __typename?: 'TopHeaderEntity';
  attributes?: Maybe<TopHeader>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TopHeaderEntityResponse = {
  __typename?: 'TopHeaderEntityResponse';
  data?: Maybe<TopHeaderEntity>;
};

export type TopHeaderInput = {
  leftLinks?: InputMaybe<Array<InputMaybe<ComponentNavItemInput>>>;
  logoSubtitle?: InputMaybe<Scalars['String']['input']>;
  logoTitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetChefsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChefsQuery = { __typename?: 'Query', chefs?: { __typename: 'ChefEntityResponseCollection', data: Array<{ __typename?: 'ChefEntity', attributes?: { __typename?: 'Chef', name: string, workingWithUs?: string | null, dishes?: { __typename?: 'DishRelationResponseCollection', data: Array<{ __typename?: 'DishEntity', attributes?: { __typename?: 'Dish', name: string } | null }> } | null } | null }> } | null };

export type GetContactDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactDataQuery = { __typename?: 'Query', contactInfo?: { __typename: 'ContactInfoEntityResponse', data?: { __typename?: 'ContactInfoEntity', attributes?: { __typename?: 'ContactInfo', heading?: string | null, contactInfo?: Array<{ __typename?: 'ComponentContactInfoContactInfo', content?: string | null } | null> | null } | null } | null } | null, openingHour?: { __typename: 'OpeningHourEntityResponse', data?: { __typename?: 'OpeningHourEntity', attributes?: { __typename?: 'OpeningHour', heading?: string | null, workingDays: string, openTimings?: { __typename?: 'ComponentWorkingHourOpenTime', openHour: any, closingHour: any } | null } | null } | null } | null };

export type GetDishCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDishCategoriesQuery = { __typename?: 'Query', dishesCategories?: { __typename?: 'DishesCategoryEntityResponseCollection', data: Array<{ __typename?: 'DishesCategoryEntity', id?: string | null, attributes?: { __typename?: 'DishesCategory', name: string } | null }> } | null };

export type GetDishesQueryVariables = Exact<{
  filters?: InputMaybe<DishFiltersInput>;
}>;


export type GetDishesQuery = { __typename?: 'Query', dishes?: { __typename: 'DishEntityResponseCollection', data: Array<{ __typename?: 'DishEntity', id?: string | null, attributes?: { __typename?: 'Dish', name: string, ingredients: string, dishImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type GetFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFooterQuery = { __typename?: 'Query', navigation?: { __typename: 'NavigationEntityResponse', data?: { __typename?: 'NavigationEntity', attributes?: { __typename?: 'Navigation', navItems?: Array<{ __typename?: 'ComponentNavItem', title?: string | null, url?: string | null } | null> | null } | null } | null } | null, contactInfo?: { __typename: 'ContactInfoEntityResponse', data?: { __typename?: 'ContactInfoEntity', attributes?: { __typename?: 'ContactInfo', heading?: string | null, contactInfo?: Array<{ __typename?: 'ComponentContactInfoContactInfo', content?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null> | null } | null } | null } | null, openingHour?: { __typename: 'OpeningHourEntityResponse', data?: { __typename?: 'OpeningHourEntity', attributes?: { __typename?: 'OpeningHour', heading?: string | null, workingDays: string, openTimings?: { __typename?: 'ComponentWorkingHourOpenTime', openHour: any, closingHour: any } | null } | null } | null } | null };

export type HomeSpecialDishesQueryVariables = Exact<{
  filters?: InputMaybe<HomeSpecialDishFiltersInput>;
}>;


export type HomeSpecialDishesQuery = { __typename?: 'Query', homeSpecialDishes?: { __typename?: 'HomeSpecialDishEntityResponseCollection', data: Array<{ __typename?: 'HomeSpecialDishEntity', attributes?: { __typename?: 'HomeSpecialDish', title: string, description?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | null }> } | null };

export type GetNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavigationQuery = { __typename?: 'Query', navigation?: { __typename?: 'NavigationEntityResponse', data?: { __typename?: 'NavigationEntity', attributes?: { __typename?: 'Navigation', navItems?: Array<{ __typename?: 'ComponentNavItem', title?: string | null, url?: string | null } | null> | null } | null } | null } | null };

export type GetPagesQueryVariables = Exact<{
  filters: PageFiltersInput;
}>;


export type GetPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', id?: string | null, attributes?: { __typename?: 'Page', title?: string | null, slug?: string | null, blocks?: Array<{ __typename?: 'ComponentBlocksContactBlock', heading1: string, heading2: string } | { __typename?: 'ComponentBlocksContactHero', contactHeroHeading: string, contactHeroImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | { __typename: 'ComponentBlocksDishesServedHero', heroHeading: string, heroImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } } | { __typename: 'ComponentBlocksDishesServedOverview', heading: string } | { __typename: 'ComponentBlocksFoodMakingProcess', heading: string, process?: Array<{ __typename?: 'ComponentProcessofmakingfoodProcessofmakingfood', title: string, description: string } | null> | null } | { __typename?: 'ComponentBlocksOurChefs', chefHeading: string } | { __typename: 'ComponentBlocksRichText', text: string } | { __typename?: 'ComponentBlocksSingleImage', image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, name: string } | null } | null } } | { __typename: 'ComponentBlocksUsp', sectionHeading: string } | { __typename?: 'Error' } | null> | null } | null }> } | null };

export type GetTopHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTopHeaderQuery = { __typename?: 'Query', topHeader?: { __typename?: 'TopHeaderEntityResponse', data?: { __typename?: 'TopHeaderEntity', attributes?: { __typename?: 'TopHeader', logoTitle?: string | null, logoSubtitle?: string | null, leftLinks?: Array<{ __typename?: 'ComponentNavItem', title?: string | null, url?: string | null } | null> | null } | null } | null } | null };
