import Layout from "../Layout";

export default function OurWork() {
  return (
    <Layout className="mt-16">
      <h2 className="text-4xl text-center font-bold capitalize">
        our recent work
      </h2>
      <p className="mx-auto text-center mt-3 w-[90%] sm:w-[50%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eum quo
        pariatur sapiente magni voluptatem?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4">
        <div className="px-2 md:p-5">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1680176750034-8d11a2f71096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="fg"
          />
          <h3 className="font-semibold text-gray-600 text-2xl py-3 capitalize">
            Help To Poor
          </h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae at aspernatur dolores assumenda necessitatibus unde quaerat
            inventore recusandae adipisci.
          </p>
          <div className="flex justify-between mt-1">
            <p className="text-lg capitalize font-bold text-gray-600">
              total cost:
            </p>
            <small className="text-lg mr-4 font-bold text-green-900">
              $500
            </small>
          </div>
        </div>
        <div className="px-2 md:p-5 p-5">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1680176750034-8d11a2f71096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="fg"
          />
          <h3 className="font-semibold text-gray-600 text-2xl py-3 capitalize">
            Help To Poor
          </h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae at aspernatur dolores assumenda necessitatibus unde quaerat
            inventore recusandae adipisci.
          </p>
          <div className="flex justify-between mt-1">
            <p className="text-lg capitalize font-bold text-gray-600">
              total cost:
            </p>
            <small className="text-lg mr-4 font-bold text-green-900">
              $500
            </small>
          </div>
        </div>
        <div className="px-2 md:p-5 p-5">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1680176750034-8d11a2f71096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="fg"
          />
          <h3 className="font-semibold text-gray-600 text-2xl py-3 capitalize">
            Help To Poor
          </h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae at aspernatur dolores assumenda necessitatibus unde quaerat
            inventore recusandae adipisci.
          </p>
          <div className="flex justify-between mt-1">
            <p className="text-lg capitalize font-bold text-gray-600">
              total cost:
            </p>
            <small className="text-lg mr-4 font-bold text-green-900">
              $500
            </small>
          </div>
        </div>
      </div>
    </Layout>
  );
}
