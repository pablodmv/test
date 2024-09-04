/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createTweetRouter from "./Tweet.router";
import createLikeRouter from "./Like.router";
import createRetweetRouter from "./Retweet.router";
import createCommentRouter from "./Comment.router";
import createTweetHashtagRouter from "./TweetHashtag.router";
import createHashtagRouter from "./Hashtag.router";
import createFollowRouter from "./Follow.router";
import createMessageRouter from "./Message.router";
import createNotificationRouter from "./Notification.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as TweetClientType } from "./Tweet.router";
import { ClientType as LikeClientType } from "./Like.router";
import { ClientType as RetweetClientType } from "./Retweet.router";
import { ClientType as CommentClientType } from "./Comment.router";
import { ClientType as TweetHashtagClientType } from "./TweetHashtag.router";
import { ClientType as HashtagClientType } from "./Hashtag.router";
import { ClientType as FollowClientType } from "./Follow.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as NotificationClientType } from "./Notification.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        tweet: createTweetRouter(router, procedure),
        like: createLikeRouter(router, procedure),
        retweet: createRetweetRouter(router, procedure),
        comment: createCommentRouter(router, procedure),
        tweetHashtag: createTweetHashtagRouter(router, procedure),
        hashtag: createHashtagRouter(router, procedure),
        follow: createFollowRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        notification: createNotificationRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    tweet: TweetClientType<AppRouter>;
    like: LikeClientType<AppRouter>;
    retweet: RetweetClientType<AppRouter>;
    comment: CommentClientType<AppRouter>;
    tweetHashtag: TweetHashtagClientType<AppRouter>;
    hashtag: HashtagClientType<AppRouter>;
    follow: FollowClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    notification: NotificationClientType<AppRouter>;
}
