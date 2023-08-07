import React from "react";
import { useAuth } from "../context/Auth.context";
import {Card} from "../components/ui/Card";

function HomePage() {
  const data = useAuth();

  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          fuga natus molestias excepturi. Ex debitis natus, rem similique
          provident totam accusantium quaerat illum fugit! Eveniet
          necessitatibus eius pariatur earum, esse labore libero, quisquam
          accusantium ex obcaecati quae dolor laboriosam vitae.
        </p>
      </Card>
    </div>
  );
}

export default HomePage;
