import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import ItemList from '../itemList/itemList';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function ItemListContainer() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  
  const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
      const getData = await fetch("../JSON/data.json");
      const dataResponse = await getData.json();
      console.log("Respuesta de async/await", dataResponse);
    };
    
    useEffect (() => {
      setTimeout(() => getProducts(), 2000);
    }, []);
  }

    return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Libro ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <h1>ACA VA EL ITEMDETAILCONTAINER</h1>
      <Link to="/about">
        <h1>About</h1>
      </Link>
      <ItemList products={products} />
    </List>
  );
}