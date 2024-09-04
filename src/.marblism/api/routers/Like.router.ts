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

        createMany: procedure.input($Schema.LikeInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).like.createMany(input as any))),

        create: procedure.input($Schema.LikeInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).like.create(input as any))),

        deleteMany: procedure.input($Schema.LikeInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).like.deleteMany(input as any))),

        delete: procedure.input($Schema.LikeInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).like.delete(input as any))),

        findFirst: procedure.input($Schema.LikeInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).like.findFirst(input as any))),

        findMany: procedure.input($Schema.LikeInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).like.findMany(input as any))),

        findUnique: procedure.input($Schema.LikeInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).like.findUnique(input as any))),

        updateMany: procedure.input($Schema.LikeInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).like.updateMany(input as any))),

        update: procedure.input($Schema.LikeInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).like.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.LikeCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LikeCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LikeCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LikeCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.LikeCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LikeCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LikeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LikeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LikeCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LikeCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LikeGetPayload<T>, Context>) => Promise<Prisma.LikeGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.LikeDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LikeDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LikeDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LikeDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LikeDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LikeDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LikeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LikeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LikeDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LikeDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LikeGetPayload<T>, Context>) => Promise<Prisma.LikeGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LikeFindFirstArgs, TData = Prisma.LikeGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LikeFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LikeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LikeFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LikeFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LikeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LikeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LikeFindManyArgs, TData = Array<Prisma.LikeGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.LikeFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LikeGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LikeFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LikeFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LikeGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LikeGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LikeFindUniqueArgs, TData = Prisma.LikeGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LikeFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LikeGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LikeFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LikeFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LikeGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LikeGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.LikeUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LikeUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LikeUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LikeUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.LikeUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LikeUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LikeGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LikeGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LikeUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LikeUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LikeGetPayload<T>, Context>) => Promise<Prisma.LikeGetPayload<T>>
            };

    };
}
