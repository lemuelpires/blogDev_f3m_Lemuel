import { useState, useEffect } from 'react';
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const userFetchDocuments = (docCollection, uid = null, search = '') => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      const collectionRef = collection(db, docCollection);
      let documentsQuery;

      if (search) {
        documentsQuery = query(
          collectionRef,
          where("tags", "array-contains", search),
          orderBy("createdAt", "desc")
        );
      } else if (uid) {
        documentsQuery = query(
          collectionRef,
          where("uid", "==", uid),
          orderBy("createdAt", "desc")
        );
      } else {
        documentsQuery = query(collectionRef, orderBy("createdAt", "desc"));
      }

      const unsubscribe = onSnapshot(
        documentsQuery,
        (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        },
        (error) => {
          console.error(error.message);
          setError(error.message);
        }
      );

      setLoading(false);
      return () => unsubscribe();
    };

    fetchDocuments();
  }, [docCollection, uid, search]);

  return { documents, error, loading };
};

