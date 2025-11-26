<template>
  <div class="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-8 pt-10">
    <!----- PAGE MAIN TITLE ----->
    <div class="max-w-[1300px] mx-auto mt-12 mb-2">
      <div class="flex items-center gap-2">
        <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <h1 class="text-2xl font-bold mt-1">Dashboard Overview</h1>
      </div>
    </div>
    <!----- MAIN CARD ----->
    <div class="max-w-[1300px] bg-slate-700/50 backdrop-blur-sm rounded-xl shadow-xl border border-slate-700 mx-auto mb-4 p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        <div class="flex flex-col justify-between bg-slate-900 shadow-sm rounded-lg p-4">
          <div class="w-full flex justify-between items-center">
            <span class="text-xl font-semibold leading-tight text-gray-200 uppercase">
              Billing
            </span>
            <span
              v-if="payment === 'PAID'"
              class="text-gray-200 text-sm font-medium bg-green-500 rounded-lg py-1.5 px-2"
            >
              Paid
            </span>
            <span
              v-else-if="payment === 'BEFORE_PAYMENT'"
              class="text-gray-200 text-sm font-medium bg-primary rounded-lg py-1.5 px-2"
            >
              Before Due
            </span>
            <span
              v-else-if="payment === 'AFTER_THE_DUE_DATE'"
              class="text-gray-200 text-sm font-medium bg-red-500 rounded-lg py-1.5 px-2"
            >
              Overdue
            </span>
          </div>
          <h2
            v-if="typeOfPayment === 'MONTHLY_PAYMENT'"
            class="text-base text-gray-200 mt-3"
          >
            Monthly Payment: {{ formatCurrency(paymentAmount) }}
          </h2>
          <h2
            v-if="typeOfPayment === 'ANNUALLY_PAYMENT'"
            class="text-base text-gray-200 mt-3"
          >
            Annual Payment: {{ formatCurrency(paymentAmount) }}
          </h2>
          <div class="flex flex-col gap-1 mt-3 mb-6">
            <span class="text-base leading-tight text-gray-200">
              Next Billing Date
            </span>
            <span class="text-base leading-tight text-gray-200">
              {{ nextBillingDate }}
            </span>
          </div>
          <button class="w-full text-white bg-linear-to-br from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg font-semibold transition-all duration-300 py-2.5 px-4 cursor-pointer">
            Download Invoice
          </button>
        </div>
        <div class="bg-slate-900 rounded-lg py-5 shadow-sm overflow-hidden">
          <apexchart type="line" height="175" :options="graphOptions" :series="graphSeriesProducts" />
        </div>
        <div class="bg-slate-900 rounded-lg py-5 shadow-sm overflow-hidden">
          <apexchart type="line" height="175" :options="graphOptions" :series="graphSeriesOrders" />
        </div>
      </div>
    </div>
    <!----- PRODUCTS CARD ----->
    <div class="max-w-[1300px] bg-slate-700/50 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-slate-700 mb-6 mx-auto">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <h2 class="text-2xl font-bold">Products</h2>
      </div>
      <div class="overflow-x-auto rounded-lg">
        <table class="min-w-full sm:w-[1100px] text-sm text-left bg-slate-700 border-spacing-0">
          <thead class="text-gray-200 bg-slate-900 uppercase">
            <tr>
              <th class="w-1/4 px-4 py-4 whitespace-nowrap rounded-tl-lg">Module Name</th>
              <th class="px-6 whitespace-nowrap">Launch Date</th>
              <th class="px-6 whitespace-nowrap">Price / month</th>
              <th class="px-6 whitespace-nowrap">Additional Info</th>
              <th class="px-6 whitespace-nowrap rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(module, index) in allProductModules" :key="module.id">
              <tr
                class="text-sm bg-slate-800 hover:bg-slate-600 transition cursor-pointer"
                @click="toggleModule(module.id)"
              >
                <td class="w-1/4 px-4 py-4 whitespace-nowrap">{{ module.row.name }}</td>
                <td class="px-6 whitespace-nowrap">{{ module.row.moduleDate }}</td>
                <td class="px-6 whitespace-nowrap">{{ module.row.price }}</td>
                <td class="px-6 whitespace-nowrap">{{ module.row.info }}</td>
                <td class="w-[125px] px-6">
                  <div
                    v-if="module.row.state.currentState === 'OK'"
                    class="w-20 flex justify-center items-center text-sm font-medium text-white bg-green-500 rounded-lg py-1 px-1.5"
                  >
                    OK
                  </div>
                  <div
                    v-else
                    class="w-20 flex justify-center items-center text-sm font-medium text-white bg-primary rounded-lg py-1 px-2"
                  >
                    {{ module.row.state.errors }} Errors
                  </div>
                </td>
              </tr>
              <!----- DETAILS ----->
              <tr v-if="module.openDetails" class="w-full cursor-pointer bg-slate-800 p-4">
                <td class="p-4 pt-2" colspan="5">
                  <div class="grid grid-cols-4 gap-3">
                    <div
                      v-for="(stat, id) in module.details.stats"
                      :key="id"
                      class="flex flex-col text-base justify-between bg-slate-900 rounded-lg shadow-sm p-5 uppercase"
                    >
                      <h4 class="mb-1">{{ stat.label }}</h4>
                      <p class="text-2xl" :class="stat.color">{{ formatNumber(stat.value) }}</p>
                    </div>
                    <div v-if="module.details.action" class="text-base bg-slate-900 rounded-lg shadow-sm p-5">
                      <h4 class="mb-1 uppercase">{{ module.details.action.label }}</h4>
                      <button class="w-full text-white bg-linear-to-br from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg font-semibold transition-all duration-300 py-2.5 px-4 mt-1">
                        {{ module.details.action.button }}
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-3 mt-3">
                    <div
                      v-if="module.details.moreInfo.length !== 0"
                      class="bg-slate-900 rounded-lg p-5"
                    >
                      <div class="h-full flex flex-col justify-between text-base">
                        <div>
                          <h3 class="mb-1 uppercase">{{ module.details.infoTitle }}</h3>
                          <p
                            v-for="(info, idx) in module.details.moreInfo"
                            :key="idx"
                            class="text-gray-500"
                          >
                            • {{ info }}
                          </p>
                        </div>
                        <div class="flex justify-between items-end mt-4">
                          <p class="text-gray-500">Last update: {{ module.details.lastUpdate }}</p>
                          <button class="text-white bg-linear-to-br from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg font-semibold transition-all duration-300 py-2 px-4">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="bg-slate-900 rounded-lg shadow-sm overflow-hidden pr-2">
                      <apexchart
                        type="line"
                        height="200"
                        :options="graphOptions2"
                        :series="module.graphSeries"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-if="index < allProductModules.length - 1" class="h-0.5"></tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <!----- ORDERS CARD ----->
    <div class="max-w-[1300px] mx-auto bg-slate-700/50 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-slate-700 mb-6">
      <div class="flex items-center gap-2 mb-2">
        <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <h2 class="text-2xl font-bold">Orders</h2>
      </div>
      <div class="overflow-x-auto rounded-lg">
        <table class="min-w-full sm:w-[1100px] text-sm text-left bg-slate-700 rounded-lg border-spacing-0">
          <thead class="text-gray-200 bg-slate-900 uppercase">
            <tr>
              <th class="w-1/4 px-4 py-4 whitespace-nowrap rounded-tl-lg">Module Name</th>
              <th class="px-6 whitespace-nowrap">Launch Date</th>
              <th class="px-6 whitespace-nowrap">Price / month</th>
              <th class="px-6 whitespace-nowrap">Additional Info</th>
              <th class="px-6 whitespace-nowrap rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(order, index) in allOrderModules" :key="order.id">
              <tr
                class="text-sm bg-slate-800 hover:bg-slate-600 transition cursor-pointer"
                @click="toggleOrder(order.id)"
              >
                <td class="w-1/4 px-4 py-4 whitespace-nowrap">{{ order.row.name }}</td>
                <td class="px-6 whitespace-nowrap">{{ order.row.moduleDate }}</td>
                <td class="px-6 whitespace-nowrap">{{ order.row.price }}</td>
                <td class="px-6 whitespace-nowrap">{{ order.row.info }}</td>
                <td class="w-[125px] px-6">
                  <div
                    v-if="order.row.state.currentState === 'OK'"
                    class="w-20 flex justify-center items-center text-sm font-medium text-white bg-green-500 rounded-lg py-1 px-1.5"
                  >
                    OK
                  </div>

                  <div
                    v-else
                    class="w-20 flex justify-center items-center text-sm font-medium text-white bg-primary rounded-lg py-1 px-2"
                  >
                    {{ order.row.state.errors }} Errors
                  </div>
                </td>
              </tr>
              <!----- DETAILS ----->
              <tr v-if="order.openDetails" class="w-full cursor-pointer bg-slate-800 p-4">
                <td class="p-4 pt-2" colspan="5">
                  <div class="grid grid-cols-4 gap-3">
                    <div
                      v-for="(stat, idx) in order.details.stats"
                      :key="idx"
                      class="flex flex-col text-base justify-between bg-slate-900 rounded-lg shadow-sm p-5 uppercase"
                    >
                      <h4 class="mb-1">{{ stat.label }}</h4>
                      <p class="text-2xl" :class="stat.color">{{ formatNumber(stat.value) }}</p>
                    </div>
                    <div v-if="order.details.action" class="text-base bg-slate-900 rounded-lg shadow-sm p-5">
                      <h4 class="mb-3 uppercase">{{ order.details.action.label }}</h4>
                      <button class="w-full text-white bg-linear-to-br from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg font-semibold transition-all duration-300 py-2.5 px-4">
                        {{ order.details.action.button }}
                      </button>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-3 mt-3">
                    <div
                      v-if="order.details.moreInfo.length !== 0"
                      class="bg-slate-900 rounded-lg p-5"
                    >
                      <div class="h-full flex flex-col justify-between text-base">
                        <div>
                          <h3 class="mb-1 uppercase">{{ order.details.infoTitle }}</h3>
                          <p
                            v-for="(info, idx) in order.details.moreInfo"
                            :key="idx"
                            class="text-gray-500"
                          >
                            • {{ info }}
                          </p>
                        </div>
                        <div class="flex justify-between items-end mt-4">
                          <p class="text-gray-500">Last update: {{ order.details.lastUpdate }}</p>
                          <button class="text-white bg-linear-to-br from-primary to-accent hover:from-primary/80 hover:to-accent/80 rounded-lg font-semibold transition-all duration-300 py-2 px-4">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="bg-slate-900 rounded-lg shadow-sm overflow-hidden pr-2">
                      <apexchart
                        type="line"
                        height="200"
                        :options="graphOptions2"
                        :series="order.graphSeries"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr v-if="index < allOrderModules.length - 1" class="h-0.5"></tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';

const formatNumber = (num: number) => {
  return new Intl.NumberFormat('cs-CZ').format(num);
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK' }).format(amount);
}

const payment = ref('PAID'); // PAID | BEFORE_PAYMENT | AFTER_THE_DUE_DATE
const paymentAmount = ref(6520);
const typeOfPayment = ref('MONTHLY_PAYMENT'); // MONTHLY_PAYMENT | ANNUALLY_PAYMENT
const nextBillingDate = ref('2025-12-17');

const graphSeriesProducts = ref([
  {
    name: 'Products 2024',
    data: [23111, 11212, 22732, 31912, 32432, 34320, 28127, 41132, 31131, 31317, 42311, 43862]
  },
  {
    name: 'Products 2025',
    data: [32238, 21224, 33325, 42201, 33310, 43373, 29426, 46216, 44340, 45123, 51324, 43321]
  }
]);

const graphSeriesOrders = ref([
  {
    name: 'Orders 2024',
    data: [122, 135, 110, 125, 140, 118, 112, 138, 116, 145, 120, 153]
  },
  {
    name: 'Orders 2025',
    data: [155, 138, 134, 127, 142, 141, 130, 147, 132, 149, 135, 166]
  }
]);

const toggleModule = (moduleId: string) => {
  allProductModules.value = allProductModules.value.map((module) => {
    if (module.id === moduleId) {
      return {...module, openDetails: !module.openDetails};
    }
    return module;
  })
}

const toggleOrder = (orderId: string) => {
  allOrderModules.value = allOrderModules.value.map((order) => {
    if (order.id === orderId) {
      return {...order, openDetails: !order.openDetails};
    }
    return order;
  })
}

const allProductModules = ref([
  {
    id: 'import',
    row: {
      name: 'Product Import',
      moduleDate: '2024-01-15',
      price: 'Included in Base Plan',
      info: 'Number of imports: ' + formatNumber(21),
      state: { currentState: 'FALSE', errors: 2 }
    },
    openDetails: false,
    details: {
      stats: [
        { label: 'Number of imports', value: 21, color: '' },
        { label: 'Successful Imports', value: 19, color: 'text-green-500' },
        { label: 'Failed Imports', value: 2, color: 'text-red-500' }
      ],
      action: { label: 'Regenerate Imports', button: 'Regenerate' },
      infoTitle: 'Additional Info / Warnings',
      moreInfo: [
        '2 imports failed due to invalid product data',
        'Missing EAN codes detected in 15 products',
        'Average import time: 2.3 seconds'
      ],
      lastUpdate: '2025-11-26 at 14:30'
    },
    graphSeries: [
      { name: 'Imports 2024', data: [22, 35, 10, 5, 40, 18, 12, 38, 16, 45, 20, 53] },
      { name: 'Imports 2025', data: [15, 28, 34, 27, 32, 41, 30, 17, 22, 39, 25, 36] }
    ]
  },
  {
    id: 'export',
    row: {
      name: 'Product Export',
      moduleDate: '2024-02-20',
      price: 'Included in Base Plan',
      info: 'Number of exports: ' + formatNumber(32),
      state: { currentState: 'FALSE', errors: 4 }
    },
    openDetails: false,
    details: {
      stats: [
        { label: 'Number of exports', value: 32, color: '' },
        { label: 'Successful Exports', value: 28, color: 'text-green-500' },
        { label: 'Failed Exports', value: 4, color: 'text-red-500' }
      ],
      action: { label: 'Regenerate Exports', button: 'Regenerate' },
      infoTitle: 'Additional Info / Warnings',
      moreInfo: [
        '4 exports failed - API connection timeout',
        'Export queue processing normally',
        'Peak export time: 09:00 - 11:00 AM'
      ],
      lastUpdate: '2025-11-25 at 09:15'
    },
    graphSeries: [
      { name: 'Exports 2024', data: [22, 35, 10, 5, 40, 18, 12, 38, 16, 45, 20, 53] },
      { name: 'Exports 2025', data: [15, 28, 34, 27, 32, 41, 30, 17, 22, 39, 25, 36] }
    ]
  },
  {
    id: 'bidding',
    row: {
      name: 'Automated Bidding',
      moduleDate: '2024-03-10',
      price: formatCurrency(1649),
      info: 'Number of products: ' + formatNumber(12321),
      state: { currentState: 'OK', errors: 0 }
    },
    openDetails: false,
    details: {
      stats: [
        { label: 'Total Products', value: 12321, color: '' },
        { label: 'Bidded Products', value: 12321, color: 'text-green-500' },
        { label: 'Non-Bidded Products', value: 0, color: 'text-red-500' }
      ],
      action: { label: 'Regenerate bidding', button: 'Regenerate' },
      infoTitle: 'Additional Info',
      moreInfo: [
        'Average CPC: $0.45',
        'Conversion rate: 3.2%',
        'ROI improvement: +18% this month',
        'Active campaigns: 8'
      ],
      lastUpdate: '2025-11-26 at 10:45'
    },
    graphSeries: [
      { name: 'Bid Adjustments 2024', data: [22, 35, 10, 5, 40, 18, 12, 38, 16, 45, 20, 53] },
      { name: 'Bid Adjustments 2025', data: [15, 28, 34, 27, 32, 41, 30, 17, 22, 39, 25, 36] }
    ]
  },
  {
    id: 'monitoring',
    row: {
      name: 'Competition Monitoring',
      moduleDate: '2024-03-10',
      price: formatCurrency(2014),
      info: 'Number of products: ' + formatNumber(27321),
      state: { currentState: 'OK', errors: 0 }
    },
    openDetails: false,
    details: {
      stats: [
        { label: 'Total Products', value: 27321, color: '' },
        { label: 'Cheaper Products', value: 27021, color: 'text-green-500' },
        { label: 'More Expensive Products', value: 300, color: 'text-red-500' }
      ],
      action: { label: 'Regenerate monitoring', button: 'Regenerate' },
      infoTitle: 'Additional Info',
      moreInfo: [
        'You are 12% cheaper than competition on average',
        'Top competitor: CompanyXYZ',
        'Price difference range: -25% to +15%',
        'Monitored competitors: 15'
      ],
      lastUpdate: '2025-11-26 at 10:45'
    },
    graphSeries: [
      { name: 'Price Tracking 2024', data: [22, 35, 10, 5, 40, 18, 12, 38, 16, 45, 20, 53] },
      { name: 'Price Tracking 2025', data: [15, 28, 34, 27, 32, 41, 30, 17, 22, 39, 25, 36] }
    ]
  }
])

const allOrderModules = ref([
  {
    id: 'order-import',
    row: {
      name: 'Order Import',
      moduleDate: '2024-01-15',
      price: 'Included in Base Plan',
      info: 'Number of imports: ' + formatNumber(31),
      state: { currentState: 'FALSE', errors: 7 }
    },
    openDetails: false,
    details: {
      stats: [
        { label: 'Number of imports', value: 31, color: '' },
        { label: 'Successful Imports', value: 24, color: 'text-green-500' },
        { label: 'Failed Imports', value: 7, color: 'text-red-500' }
      ],
      action: { label: 'Regenerate Imports', button: 'Regenerate' },
      infoTitle: 'Additional Info / Warnings',
      moreInfo: [
        '7 order imports failed - payment validation errors',
        'Average processing time: 1.8 seconds',
        'Peak order volume: 14:00 - 16:00'
      ],
      lastUpdate: '2025-11-26 at 14:30'
    },
    graphSeries: [
      { name: 'Imports 2024', data: [22, 35, 10, 5, 40, 18, 12, 38, 16, 45, 20, 53] },
      { name: 'Imports 2025', data: [15, 28, 34, 27, 32, 41, 30, 17, 22, 39, 25, 36] }
    ]
  },
  {
    id: 'order-export',
    row: {
      name: 'Order Export',
      moduleDate: '2024-02-20',
      price: 'Included in Base Plan',
      info: 'Number of exports: ' + formatNumber(10),
      state: { currentState: 'OK', errors: 0 }
    },
    openDetails: false,
    details: {
      stats: [
        { label: 'Number of exports', value: 10, color: '' },
        { label: 'Successful Exports', value: 10, color: 'text-green-500' },
        { label: 'Failed Exports', value: 0, color: 'text-red-500' }
      ],
      action: { label: 'Regenerate Exports', button: 'Regenerate' },
      infoTitle: 'Additional Info / Warnings',
      moreInfo: [
        'All exports completed successfully',
        'Export format: CSV, XML',
        'Last export: 150 orders'
      ],
      lastUpdate: '2025-11-25 at 09:15'
    },
    graphSeries: [
      { name: 'Exports 2024', data: [22, 35, 10, 5, 40, 18, 12, 38, 16, 45, 20, 53] },
      { name: 'Exports 2025', data: [15, 28, 34, 27, 32, 41, 30, 17, 22, 39, 25, 36] }
    ]
  }
])

const graphOptions = computed(() => {
  return {
    chart: {
      type: 'line',
      background: 'transparent',
      zoom: { enabled: false },
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    colors: ['#6366f1', '#10b981'],
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    legend: {
      show: true,
      position: 'top',
      offsetY: 0,
      labels: {
        colors: '#e5e7eb',
      },
      markers: {
        strokeWidth: 0,
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontFamily: 'inherit',
      },
    }, 
  }
})

const graphOptions2 = computed(() => {
  return {
    chart: {
      type: 'line',
      background: 'transparent',
      zoom: { enabled: false },
      toolbar: { show: false },
      animations: { enabled: true }
    },
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    colors: ['#6366f1', '#10b981'],
    grid: {
      borderColor: '#334155',
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } }
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      labels: {
        show: true,
        style: { colors: '#e5e7eb' }
      },
      axisTicks: {
        show: true,
        color: '#334155'
      },
      axisBorder: {
        show: true,
        color: '#334155'
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#e5e7eb',
          fontSize: '12px'
        }
      }
    },
    legend: {
      show: true,
      position: 'top',
      offsetY: 8,
      labels: {
        colors: '#e5e7eb'
      },
      markers: {
        strokeWidth: 0
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontFamily: 'inherit',
        color: '#e5e7eb'
      }
    }
  }
})
</script>
