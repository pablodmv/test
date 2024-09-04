/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.TweetHashtagInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweetHashtag.createMany(input as any))),

        create: procedure.input($Schema.TweetHashtagInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweetHashtag.create(input as any))),

        deleteMany: procedure.input($Schema.TweetHashtagInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweetHashtag.deleteMany(input as any))),

        delete: procedure.input($Schema.TweetHashtagInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweetHashtag.delete(input as any))),

        findFirst: procedure.input($Schema.TweetHashtagInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).tweetHashtag.findFirst(input as any))),

        findMany: procedure.input($Schema.TweetHashtagInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).tweetHashtag.findMany(input as any))),

        findUnique: procedure.input($Schema.TweetHashtagInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).tweetHashtag.findUnique(input as any))),

        updateMany: procedure.input($Schema.TweetHashtagInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweetHashtag.updateMany(input as any))),

        update: procedure.input($Schema.TweetHashtagInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweetHashtag.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TweetHashtagCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetHashtagCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetHashtagCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetHashtagCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TweetHashtagCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetHashtagCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TweetHashtagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TweetHashtagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetHashtagCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetHashtagCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TweetHashtagGetPayload<T>, Context>) => Promise<Prisma.TweetHashtagGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TweetHashtagDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetHashtagDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetHashtagDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetHashtagDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TweetHashtagDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetHashtagDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TweetHashtagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TweetHashtagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetHashtagDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetHashtagDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TweetHashtagGetPayload<T>, Context>) => Promise<Prisma.TweetHashtagGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TweetHashtagFindFirstArgs, TData = Prisma.TweetHashtagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TweetHashtagFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TweetHashtagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TweetHashtagFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TweetHashtagFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TweetHashtagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TweetHashtagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TweetHashtagFindManyArgs, TData = Array<Prisma.TweetHashtagGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TweetHashtagFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TweetHashtagGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TweetHashtagFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TweetHashtagFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TweetHashtagGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TweetHashtagGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TweetHashtagFindUniqueArgs, TData = Prisma.TweetHashtagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TweetHashtagFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TweetHashtagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TweetHashtagFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TweetHashtagFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TweetHashtagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TweetHashtagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TweetHashtagUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetHashtagUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetHashtagUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetHashtagUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TweetHashtagUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetHashtagUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TweetHashtagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TweetHashtagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetHashtagUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetHashtagUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TweetHashtagGetPayload<T>, Context>) => Promise<Prisma.TweetHashtagGetPayload<T>>
            };

    };
}
