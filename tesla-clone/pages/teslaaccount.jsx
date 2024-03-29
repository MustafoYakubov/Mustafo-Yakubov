/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AccountNavbar from "../components/AccountNavbar/AccountNavbar";
import { useAuth } from "../context/AuthUserContext.js";
import Head from "next/head";
import styles from "../styles/teslaaccount.module.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Image from "next/image";

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/signIn");
  }, [authUser, loading, router]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <AccountNavbar />
          <Head>
            <title>Your Account</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            ></meta>
          </Head>
          <div className={styles.logInfo}>
            {authUser && (
              <span className={styles.email}>
                Youre logged as <span>{authUser.email} `s </span>email
              </span>
            )}
            <button className={styles.logOutBtn} onClick={signOut}>
              <ExitToAppIcon className={styles.btnIcon} />
              Sign Out
            </button>
          </div>
          <div className={styles.carPurchase}>
            <img
              src="/images/modelX.png"
              alt="Model X purchase"
              className={styles.modelX}
            />
            <h1>Model X</h1>
            <div className={styles.btnMain}>
              <a href="#" className={styles.btn}>
                custom order
              </a>
              <a href="#" className={styles.btn}>
                existing inventory
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoggedIn;
