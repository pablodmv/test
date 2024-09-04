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

        createMany: procedure.input($Schema.TweetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweet.createMany(input as any))),

        create: procedure.input($Schema.TweetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweet.create(input as any))),

        deleteMany: procedure.input($Schema.TweetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweet.deleteMany(input as any))),

        delete: procedure.input($Schema.TweetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweet.delete(input as any))),

        findFirst: procedure.input($Schema.TweetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).tweet.findFirst(input as any))),

        findMany: procedure.input($Schema.TweetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).tweet.findMany(input as any))),

        findUnique: procedure.input($Schema.TweetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).tweet.findUnique(input as any))),

        updateMany: procedure.input($Schema.TweetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweet.updateMany(input as any))),

        update: procedure.input($Schema.TweetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tweet.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.TweetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TweetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TweetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TweetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TweetGetPayload<T>, Context>) => Promise<Prisma.TweetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TweetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TweetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TweetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TweetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TweetGetPayload<T>, Context>) => Promise<Prisma.TweetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TweetFindFirstArgs, TData = Prisma.TweetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TweetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TweetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TweetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TweetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TweetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TweetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TweetFindManyArgs, TData = Array<Prisma.TweetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TweetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TweetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TweetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TweetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TweetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TweetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TweetFindUniqueArgs, TData = Prisma.TweetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TweetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TweetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TweetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TweetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TweetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TweetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TweetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TweetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TweetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TweetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TweetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TweetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TweetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TweetGetPayload<T>, Context>) => Promise<Prisma.TweetGetPayload<T>>
            };

    };
}
