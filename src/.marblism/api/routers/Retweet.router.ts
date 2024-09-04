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

        createMany: procedure.input($Schema.RetweetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).retweet.createMany(input as any))),

        create: procedure.input($Schema.RetweetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).retweet.create(input as any))),

        deleteMany: procedure.input($Schema.RetweetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).retweet.deleteMany(input as any))),

        delete: procedure.input($Schema.RetweetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).retweet.delete(input as any))),

        findFirst: procedure.input($Schema.RetweetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).retweet.findFirst(input as any))),

        findMany: procedure.input($Schema.RetweetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).retweet.findMany(input as any))),

        findUnique: procedure.input($Schema.RetweetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).retweet.findUnique(input as any))),

        updateMany: procedure.input($Schema.RetweetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).retweet.updateMany(input as any))),

        update: procedure.input($Schema.RetweetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).retweet.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RetweetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RetweetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RetweetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RetweetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RetweetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RetweetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RetweetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RetweetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RetweetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RetweetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RetweetGetPayload<T>, Context>) => Promise<Prisma.RetweetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RetweetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RetweetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RetweetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RetweetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RetweetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RetweetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RetweetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RetweetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RetweetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RetweetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RetweetGetPayload<T>, Context>) => Promise<Prisma.RetweetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RetweetFindFirstArgs, TData = Prisma.RetweetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RetweetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RetweetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RetweetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RetweetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RetweetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RetweetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RetweetFindManyArgs, TData = Array<Prisma.RetweetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.RetweetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RetweetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RetweetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RetweetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RetweetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RetweetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RetweetFindUniqueArgs, TData = Prisma.RetweetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RetweetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RetweetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RetweetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RetweetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RetweetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RetweetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RetweetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RetweetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RetweetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RetweetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RetweetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RetweetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RetweetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RetweetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RetweetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RetweetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RetweetGetPayload<T>, Context>) => Promise<Prisma.RetweetGetPayload<T>>
            };

    };
}
