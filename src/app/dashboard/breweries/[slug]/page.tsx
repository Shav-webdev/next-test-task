import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button } from '@/components/Button';
import { IBrewery, PageProps } from '../../../../types';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { getSingleBrewery } from '@/service/data/breweries';
import { Button as MuiButton, CardActions } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default async function BreweryPage({ params }: PageProps) {
  const { slug } = params;
  const brewery: IBrewery = await getSingleBrewery(slug);

  return (
    <Box sx={{ minWidth: 275, padding: 10 }}>
      <Button href={`/dashboard/breweries`} variant={'primary-link'}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavigateBeforeIcon />
          Back to breweries
        </Box>
      </Button>
      <Typography
        sx={{ mb: 6, textAlign: 'center' }}
        variant="h2"
        component="div"
      >
        {brewery.name}
      </Typography>
      <Card variant="outlined">
        <CardContent>
          {brewery.country && (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Country: {brewery.country}
            </Typography>
          )}
          {brewery.city && (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              City: {brewery.city}
            </Typography>
          )}
          {brewery.state && (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              City: {brewery.state}
            </Typography>
          )}
          {brewery.brewery_type && (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Type: {brewery.brewery_type}
            </Typography>
          )}
          {brewery.street && (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Street: {brewery.street}
            </Typography>
          )}
          {brewery.postal_code && (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Postal code: {brewery.postal_code}
            </Typography>
          )}
          {brewery.address_1 && (
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Address: {brewery.address_1}
            </Typography>
          )}
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: 'text.secondary', mr: 1 }}>
                Website:
              </Typography>
              <MuiButton
                sx={{
                  padding: 0,
                }}
                size={'small'}
                LinkComponent={Link}
                target="_blank"
                href={brewery.website_url}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ textTransform: 'lowercase' }}
                >
                  {brewery.website_url}
                </Typography>
              </MuiButton>
            </Box>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
