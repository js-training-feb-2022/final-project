import React from 'react';
import Card from '@mui/material/Card';
import pokeball from '../../assets/pokeball.png';

export default function CardSkeleton() {
  return (
    <Card sx={{ 
            bgcolor: 'secondary.main',
            height: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
    >
        <img
          src={pokeball}
          alt="pokeball"
          style={{ width: '150px', height: '150px' }}
        />
    </Card>
  );
}