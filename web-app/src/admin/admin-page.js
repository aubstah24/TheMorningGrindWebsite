import React, { useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  List,
  ListItem,
} from "semantic-ui-react";
import { supabase } from "../supabase-client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import { UploadImage } from "./upload-image";
import { CreateDrinkItem } from "./create-drink-item";
import { UpdateDrinkItem } from "./update-drink-item";
import { MilkTable } from "./milk-table";
import { TeaFlavors } from "./tea-flavors";
import { OrderDashboard } from "./order-dashboard";
import { DeleteDrinkItem } from "./delete-drink-item";
import { DrinkListTable } from "./drink-list-table";

export const AdminPage = () => {
  const [session, setSession] = React.useState(null);

  async function logout() {
    supabase.auth.signOut();
  }
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        showLinks={false}
      />
    );
  } else {
    return (
      <div className="admin-wrapper">
        <Button onClick={logout} color="red">
          LOGOUT
        </Button>

        {/*Show admin page after login */}
        <div className="admin-header">
          <Header as="h1" textAlign="center">
            WELCOME TO THE ADMIN PAGE
          </Header>
          <Header as="h3" textAlign="center">
            All edits here will be automatically updated to the website. It uses
            Supabase to submit changes on the database side. Only Aubrie has
            access to the database, so if any issues come up, contact her. The
            only thing you cannot edit here is the boba toppings. Aubrie has to
            manually edit that.
          </Header>

          <h4>Button Color Legend</h4>
          <Button primary>ADDING</Button>
          <Button color="red">DELETING</Button>
          <Button color="purple">MODIFYING</Button>

          <div className="table-contents">
            <h4>Table of Contents</h4>
            <ul>
              <a href="#add-drink">
                <li>Create New Menu Item</li>
              </a>
              <a href="#del-drink">
                <li>Remove Menu Item</li>
              </a>
              <a href="#edit-drink">
                <li>Edit Menu Item</li>
              </a>
              <a href="#drinks">
                <li>Drink List Table</li>
              </a>
              <a href="#milks">
                <li>Milk Functions</li>
              </a>
              <a href="#teas">
                <li>Tea Functions</li>
              </a>
              <a href="#orders">
                <li>Order Dashboard</li>
              </a>
            </ul>
          </div>
        </div>
        <Divider />

        <section className="admin-sections">
          {/*Upload image to the drinkImagesStorage bucket in supabase*/}
          <Header as="h2">Upload Menu Images Here:</Header>
          <p>
            This is required if you are adding a new drink to the menu OR
            changing an existing drink image.
          </p>
          <Container>
            <UploadImage />
          </Container>
        </section>

        <section id="add-drink" className="admin-sections">
          <Divider horizontal>
            <Header as="h2">Create New Menu Item:</Header>
          </Divider>
          <p>
            To create a new menu item, follow the directions below exactly as
            follows.
          </p>
          <Container>
            <List ordered>
              <ListItem>
                <b>Upload the item image</b> to supabase storage above. Make
                sure the photo is a 1:1 ratio size (square).
              </ListItem>
              <ListItem>
                <b>DRINK ID:</b> Use the table at the bottom of the page to get
                the next number in the order.
              </ListItem>
              <ListItem>
                <b>DRINK NAME: </b>Use proper capitalization and double check
                for typos.
              </ListItem>
              <ListItem>
                <b>DRINK PRICE: </b>Do NOT put $ in front of it. Just put the
                numbers. --> 6.99 / 3
              </ListItem>
              <ListItem>
                <b>IMAGE FILE NAME: </b> Ensure the image is uploaded first.
                Type in the filename exactly how it is displayed in the
                database. --> exampleImage.png
              </ListItem>
              <ListItem>
                <b>DRINK DESCRIPTION: </b> Use proper capitalization. Short
                summary with 2 sentences max.
              </ListItem>
              <ListItem>
                <b>CATEGORY: </b> Choose from the categories listed. If its
                something that doesn't include milk by default and includes
                coffee --> it is Coffee. If you want to create a new category
                please let Aubrie know.
              </ListItem>
              <ListItem>
                <b>DEFAULT ATTR: </b> This is an extra. Used to say "Boba is
                included by default" or "Sweeteners available at pick-up."
              </ListItem>
              <ListItem>
                <b>CAFFEINE: </b> Allows for customers to see options they have
                for non-caffeine. Used for labeling.
              </ListItem>
              <ListItem>
                <b>DAIRY: </b> Allows for customers to see options they have for
                dairy-free. Used for labeling.
              </ListItem>
            </List>
          </Container>
          <br />
          <CreateDrinkItem />
        </section>

        <section id="del-drink" className="admin-sections">
          {/*REMOVE DRINK*/}
          <Divider horizontal>
            <Header as="h2">Remove Menu Item:</Header>
          </Divider>
          <p>
            To remove a menu item, please select the item from below and sign
            your name and date. Once you delete, there is no undo.{" "}
          </p>
          <DeleteDrinkItem />
        </section>

        <section id="edit-drink" className="admin-sections">
          {/*EDIT DRINK*/}
          <Divider horizontal>
            <Header as="h2">Make Edits To A Menu Item:</Header>
          </Divider>
          <p>
            To edit a menu item, please select the item from below and sign your
            name and date. Change what needs to be changed and press save.
          </p>
          <UpdateDrinkItem />
        </section>

        <section id="drinks" className="admin-sections">
          {/*See Drink List from supabse */}
          <DrinkListTable />
        </section>

        <section id="milks" className="admin-sections">
          {/*Make edits to Milk options*/}
          <MilkTable />
        </section>

        <section id="teas" className="admin-sections">
          {/*Make edits to Tea List via supabase*/}
          <TeaFlavors />
        </section>

        <section id="orders" className="admin-sections">
          {/*See dashboard of orders -- simple table of overall orders with date filters*/}
          <OrderDashboard />
        </section>
      </div>
    );
  }
};
