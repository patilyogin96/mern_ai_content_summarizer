export default function UserTable({ users }: { users: any[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Age</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">City</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Created</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((u) => (
            <tr key={u._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">{`${u.first_name} ${u.last_name}`}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{u.age}</td>
              <td className="px-6 py-4 text-sm text-gray-800">{u.city}</td>
              <td className="px-6 py-4 text-sm text-gray-800">
                {new Date(u.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
