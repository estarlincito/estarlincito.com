import { ContextProvider } from "@/context";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Página no encontrada</title>
      </Head>

      <ContextProvider>
        <main className="grid justify-center items-center h-[100vh] bg-white text-neutral-900 dark:bg-black dark:text-neutral-200">
          <div>
            <h3 className=" text-3xl">Lo sentimos…</h3>
            <p className="text-2xl">Esta página no existe.</p>

            <p>
              Puedes volver a&nbsp;
              <Link
                href="/"
                className="font-bold hover:opacity-80 active:opacity-60"
              >
                inicio
              </Link>
            </p>
          </div>
        </main>
      </ContextProvider>
    </>
  );
};

export default NotFoundPage;
