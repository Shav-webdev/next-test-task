'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IBrewery } from '../../types';
import { Button as MuiButton, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from '@/components/Button';
import Link from 'next/link';

interface IAppCardProps {
  brewery: IBrewery;
}

export default function AppCard({ brewery }: IAppCardProps) {
  return (
    <Box>
      <Card variant="outlined">
        <Button
          sx={{ display: 'inline-block', width: '100%' }}
          variant={'primary-link'}
          href={`/dashboard/breweries/${brewery.id}`}
        >
          <CardContent>
            <Typography variant="h6_bold" component="div">
              {brewery.name}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {brewery.brewery_type}
            </Typography>
            <Typography variant="body2">
              {brewery.country}, {brewery.city}
            </Typography>
          </CardContent>
        </Button>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {brewery.phone && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: 'text.secondary', ml: 1, mr: 1 }}>
                Tel:
              </Typography>
              <Button variant={'primary-link'} href={`tel:${brewery.phone}`}>
                {brewery.phone}
              </Button>
            </Box>
          )}

          {brewery.website_url && (
            <MuiButton
              sx={{
                padding: 0,
              }}
              size={'small'}
              LinkComponent={Link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              href={brewery.website_url}
            >
              <Typography
                variant="p4_regular"
                sx={{ textTransform: 'capitalize' }}
              >
                Website
              </Typography>
            </MuiButton>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
