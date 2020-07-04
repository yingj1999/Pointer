/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateUserProfileInput = {
  username: string;
  image: string;
  reviewsList: Array<number>;
};

export type ModelUserProfileConditionInput = {
  username?: ModelStringInput | null;
  image?: ModelStringInput | null;
  reviewsList?: ModelIntInput | null;
  and?: Array<ModelUserProfileConditionInput | null> | null;
  or?: Array<ModelUserProfileConditionInput | null> | null;
  not?: ModelUserProfileConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateUserProfileInput = {
  username?: string | null;
  image?: string | null;
  reviewsList?: Array<number> | null;
};

export type DeleteUserProfileInput = {
  id?: string | null;
};

export type CreateReviewStructInput = {
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
};

export type ModelreviewStructConditionInput = {
  reviewID?: ModelStringInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelreviewStructConditionInput | null> | null;
  or?: Array<ModelreviewStructConditionInput | null> | null;
  not?: ModelreviewStructConditionInput | null;
};

export type UpdateReviewStructInput = {
  reviewID?: string | null;
  title?: string | null;
  description?: string | null;
  image?: string | null;
  rating?: number | null;
  tags?: Array<string> | null;
};

export type DeleteReviewStructInput = {
  id?: string | null;
};

export type ModelUserProfileFilterInput = {
  username?: ModelStringInput | null;
  image?: ModelStringInput | null;
  reviewsList?: ModelIntInput | null;
  and?: Array<ModelUserProfileFilterInput | null> | null;
  or?: Array<ModelUserProfileFilterInput | null> | null;
  not?: ModelUserProfileFilterInput | null;
};

export type ModelreviewStructFilterInput = {
  reviewID?: ModelStringInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  rating?: ModelIntInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelreviewStructFilterInput | null> | null;
  or?: Array<ModelreviewStructFilterInput | null> | null;
  not?: ModelreviewStructFilterInput | null;
};

export type CreateUserProfileMutation = {
  __typename: "UserProfile";
  username: string;
  image: string;
  reviewsList: Array<number>;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserProfileMutation = {
  __typename: "UserProfile";
  username: string;
  image: string;
  reviewsList: Array<number>;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserProfileMutation = {
  __typename: "UserProfile";
  username: string;
  image: string;
  reviewsList: Array<number>;
  createdAt: string;
  updatedAt: string;
};

export type CreateReviewStructMutation = {
  __typename: "reviewStruct";
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export type UpdateReviewStructMutation = {
  __typename: "reviewStruct";
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export type DeleteReviewStructMutation = {
  __typename: "reviewStruct";
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export type GetUserProfileQuery = {
  __typename: "UserProfile";
  username: string;
  image: string;
  reviewsList: Array<number>;
  createdAt: string;
  updatedAt: string;
};

export type ListUserProfilesQuery = {
  __typename: "ModelUserProfileConnection";
  items: Array<{
    __typename: "UserProfile";
    username: string;
    image: string;
    reviewsList: Array<number>;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetReviewStructQuery = {
  __typename: "reviewStruct";
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export type ListReviewStructsQuery = {
  __typename: "ModelreviewStructConnection";
  items: Array<{
    __typename: "reviewStruct";
    reviewID: string;
    title: string;
    description: string;
    image: string;
    rating: number;
    tags: Array<string>;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserProfileSubscription = {
  __typename: "UserProfile";
  username: string;
  image: string;
  reviewsList: Array<number>;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserProfileSubscription = {
  __typename: "UserProfile";
  username: string;
  image: string;
  reviewsList: Array<number>;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserProfileSubscription = {
  __typename: "UserProfile";
  username: string;
  image: string;
  reviewsList: Array<number>;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateReviewStructSubscription = {
  __typename: "reviewStruct";
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateReviewStructSubscription = {
  __typename: "reviewStruct";
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteReviewStructSubscription = {
  __typename: "reviewStruct";
  reviewID: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUserProfile(
    input: CreateUserProfileInput,
    condition?: ModelUserProfileConditionInput
  ): Promise<CreateUserProfileMutation> {
    const statement = `mutation CreateUserProfile($input: CreateUserProfileInput!, $condition: ModelUserProfileConditionInput) {
        createUserProfile(input: $input, condition: $condition) {
          __typename
          username
          image
          reviewsList
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserProfileMutation>response.data.createUserProfile;
  }
  async UpdateUserProfile(
    input: UpdateUserProfileInput,
    condition?: ModelUserProfileConditionInput
  ): Promise<UpdateUserProfileMutation> {
    const statement = `mutation UpdateUserProfile($input: UpdateUserProfileInput!, $condition: ModelUserProfileConditionInput) {
        updateUserProfile(input: $input, condition: $condition) {
          __typename
          username
          image
          reviewsList
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserProfileMutation>response.data.updateUserProfile;
  }
  async DeleteUserProfile(
    input: DeleteUserProfileInput,
    condition?: ModelUserProfileConditionInput
  ): Promise<DeleteUserProfileMutation> {
    const statement = `mutation DeleteUserProfile($input: DeleteUserProfileInput!, $condition: ModelUserProfileConditionInput) {
        deleteUserProfile(input: $input, condition: $condition) {
          __typename
          username
          image
          reviewsList
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserProfileMutation>response.data.deleteUserProfile;
  }
  async CreateReviewStruct(
    input: CreateReviewStructInput,
    condition?: ModelreviewStructConditionInput
  ): Promise<CreateReviewStructMutation> {
    const statement = `mutation CreateReviewStruct($input: CreateReviewStructInput!, $condition: ModelreviewStructConditionInput) {
        createReviewStruct(input: $input, condition: $condition) {
          __typename
          reviewID
          title
          description
          image
          rating
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReviewStructMutation>response.data.createReviewStruct;
  }
  async UpdateReviewStruct(
    input: UpdateReviewStructInput,
    condition?: ModelreviewStructConditionInput
  ): Promise<UpdateReviewStructMutation> {
    const statement = `mutation UpdateReviewStruct($input: UpdateReviewStructInput!, $condition: ModelreviewStructConditionInput) {
        updateReviewStruct(input: $input, condition: $condition) {
          __typename
          reviewID
          title
          description
          image
          rating
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReviewStructMutation>response.data.updateReviewStruct;
  }
  async DeleteReviewStruct(
    input: DeleteReviewStructInput,
    condition?: ModelreviewStructConditionInput
  ): Promise<DeleteReviewStructMutation> {
    const statement = `mutation DeleteReviewStruct($input: DeleteReviewStructInput!, $condition: ModelreviewStructConditionInput) {
        deleteReviewStruct(input: $input, condition: $condition) {
          __typename
          reviewID
          title
          description
          image
          rating
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReviewStructMutation>response.data.deleteReviewStruct;
  }
  async GetUserProfile(id: string): Promise<GetUserProfileQuery> {
    const statement = `query GetUserProfile($id: ID!) {
        getUserProfile(id: $id) {
          __typename
          username
          image
          reviewsList
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserProfileQuery>response.data.getUserProfile;
  }
  async ListUserProfiles(
    filter?: ModelUserProfileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserProfilesQuery> {
    const statement = `query ListUserProfiles($filter: ModelUserProfileFilterInput, $limit: Int, $nextToken: String) {
        listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            username
            image
            reviewsList
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserProfilesQuery>response.data.listUserProfiles;
  }
  async GetReviewStruct(id: string): Promise<GetReviewStructQuery> {
    const statement = `query GetReviewStruct($id: ID!) {
        getReviewStruct(id: $id) {
          __typename
          reviewID
          title
          description
          image
          rating
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReviewStructQuery>response.data.getReviewStruct;
  }
  async ListReviewStructs(
    filter?: ModelreviewStructFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReviewStructsQuery> {
    const statement = `query ListReviewStructs($filter: ModelreviewStructFilterInput, $limit: Int, $nextToken: String) {
        listReviewStructs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            reviewID
            title
            description
            image
            rating
            tags
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReviewStructsQuery>response.data.listReviewStructs;
  }
  OnCreateUserProfileListener: Observable<
    OnCreateUserProfileSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserProfile {
        onCreateUserProfile {
          __typename
          username
          image
          reviewsList
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserProfileSubscription>;

  OnUpdateUserProfileListener: Observable<
    OnUpdateUserProfileSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUserProfile {
        onUpdateUserProfile {
          __typename
          username
          image
          reviewsList
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserProfileSubscription>;

  OnDeleteUserProfileListener: Observable<
    OnDeleteUserProfileSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUserProfile {
        onDeleteUserProfile {
          __typename
          username
          image
          reviewsList
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserProfileSubscription>;

  OnCreateReviewStructListener: Observable<
    OnCreateReviewStructSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReviewStruct {
        onCreateReviewStruct {
          __typename
          reviewID
          title
          description
          image
          rating
          tags
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateReviewStructSubscription>;

  OnUpdateReviewStructListener: Observable<
    OnUpdateReviewStructSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReviewStruct {
        onUpdateReviewStruct {
          __typename
          reviewID
          title
          description
          image
          rating
          tags
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateReviewStructSubscription>;

  OnDeleteReviewStructListener: Observable<
    OnDeleteReviewStructSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReviewStruct {
        onDeleteReviewStruct {
          __typename
          reviewID
          title
          description
          image
          rating
          tags
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteReviewStructSubscription>;
}
