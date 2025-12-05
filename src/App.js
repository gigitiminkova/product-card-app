import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Variable pour le prénom (vous pouvez la modifier)
const firstName = "Hadjer"; // Mettez "" pour tester sans prénom

function App() {
  return (
    <Container className="py-5">
      <Card className="shadow-lg border-0" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <Image />
        <Card.Body className="p-4">
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      {/* Message de salutation */}
      <div className="text-center mt-4">
        <h4 className="greeting">
          {firstName ? `Bonjour, ${firstName} 👋` : "Bonjour ! 👋"}
        </h4>
        
        {/* Image affichée si le prénom est fourni */}
        {firstName && (
          <div className="mt-3">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" 
              alt="Avatar"
              className="rounded-circle shadow"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;