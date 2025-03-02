import * as React from 'react';
import { Box, Button, Card, CardHeader, CardMedia, CardContent, CardActions, Modal, Avatar, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function RecipeReviewCard({ item }) {
  const [open, setOpen] = React.useState(false);
  const [instructionsOpen, setInstructionsOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInstructionsOpen = () => setInstructionsOpen(true);
  const handleInstructionsClose = () => setInstructionsOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
    p: 4,
    display: 'flex',
    animation: 'fadeIn 0.3s ease-in-out',
  };

  const instructionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
    p: 3,
    textAlign: 'left',
    animation: 'fadeIn 0.3s ease-in-out',
  };

  return (
    <>
      <Card
        onClick={handleOpen}
        sx={{
          width: 330,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.5)'
          }
        }}
      >
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />}
          title={item.name}
          subheader={item.cuisine}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Prep Time: {item.prepTimeMinutes} mins</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Servings: {item.servings}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
            {item.rating} ⭐ ({item.reviewCount})
          </Typography>
          <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
          <IconButton aria-label="share"><ShareIcon /></IconButton>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={style}>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <img src={item.image} style={{ height: '80%', width: '90%', borderRadius: '7px' }} alt={item.name} />
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>Meal Type: {item.mealType.join(', ')}</Typography>
            <Typography sx={{ mt: 1 }}><strong>Calories per Serving:</strong> {item.caloriesPerServing} kcal</Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, bgcolor: 'orangered', '&:hover': { bgcolor: '#cc3700' } }}
              onClick={handleInstructionsOpen}
            >
              View Instructions
            </Button>
          </Box>
          <Box sx={{ flex: 1, p: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{item.name}</Typography><hr />
            <Typography sx={{ mt: 1 }}><strong>Cuisine:</strong> {item.cuisine}</Typography>
            <Typography sx={{ mt: 1 }}><strong>Difficulty:</strong> {item.difficulty}</Typography>
            <Typography sx={{ mt: 1 }}><strong>Prep Time:</strong> {item.prepTimeMinutes} mins</Typography>
            <Typography sx={{ mt: 1 }}><strong>Cook Time:</strong> {item.cookTimeMinutes} mins</Typography>
            <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>Ingredients:</Typography>
            <ul>
              {item.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
            </ul>
          </Box>
        </Box>
      </Modal>

      <Modal open={instructionsOpen} onClose={handleInstructionsClose} aria-labelledby="instructions-title" aria-describedby="instructions-description">
        <Box sx={instructionStyle}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Instructions:</Typography>
          <Box>
            {item.instructions.map((step, index) => (
              <Typography key={index} sx={{ mb: 1 }}>{index + 1}. {step}</Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              size="small"
              sx={{ bgcolor: 'orangered', '&:hover': { bgcolor: '#cc3700' } }}
              onClick={handleInstructionsClose}
            >
              Close
            </Button>

          </Box>
        </Box>
      </Modal>
    </>
  );
}





