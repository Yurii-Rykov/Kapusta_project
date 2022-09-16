import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://kapusta-backend.goit.global/transaction',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const transactionApi = createApi({
  reducerPath: 'transactionApi',
  baseQuery,
  tagTypes: ['Transactions'],
  endpoints: builder => ({
    getIncomeCategories: builder.query({
      query: () => `/income-categories`,
      providesTags: ['Transactions'],
    }),

    getExpenseCategories: builder.query({
      query: () => `/expense-categories`,
      providesTags: ['Transactions'],
    }),

    getPeriodData: builder.query({
      query: data => `/period-data?date=${data}`,
      providesTags: ['Transactions'],
    }),

    getIncome: builder.query({
      query: () => `/income`,
      providesTags: ['Transactions'],
    }),

    getExpense: builder.query({
      query: () => `/expense`,
      providesTags: ['Transactions'],
    }),

    deleteTransaction: builder.mutation({
      query: id => ({
        url: `${id}`,
        method: 'DELETE',
        invalidatesTags: ['Transactions'],
      }),
    }),

    addExpense: builder.mutation({
      query: body => ({
        url: '/expense',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Transactions'],
    }),

    addIncome: builder.mutation({
      query: body => ({
        url: '/income',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Transactions'],
    }),
  }),
});

export const {
  useGetIncomeCategoriesQuery,
  useGetExpenseCategoriesQuery,
  useGetPeriodDataQuery,
  useGetIncomeQuery,
  useGetExpenseQuery,
  useDeleteTransactionMutation,
  useAddExpenseMutation,
  useAddIncomeMutation,
} = transactionApi;
