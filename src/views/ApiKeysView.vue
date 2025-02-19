<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">🔑 API Keys</h1>
      <p class="mb-4">Manage your API keys here.</p>
  
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        API Key Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date Created
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Last Used
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b border-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Test API Key
                    </th>
                    <td class="px-6 py-4">
                        2025-02-19
                    </td>
                    <td class="px-6 py-4">
                        2025-02-19
                    </td>
                    <td class="px-6 py-4">
                        Active
                    </td>
                    <td class="flex items-center px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 hover:underline">View</a>
                        <a href="#" class="font-medium text-red-600 hover:underline ms-3">Remove</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    </div>
  </template>
