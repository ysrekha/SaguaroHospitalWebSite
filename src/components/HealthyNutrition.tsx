import { Container } from 'react-bootstrap'; // Import the Container component from React Bootstrap for layout and styling

// Define the HealthyNutrition functional component
export default function HealthyNutrition() {
    return (
        <Container className="mt-3"> {/* Main container for the Healthy Nutrition section */}
            <h2 className="healthybg">Healthy Nutrition</h2> {/* Section header with custom styling */}
            
            <Container className="mt-3 mx-4"> {/* Inner container with margin-top and margin-x for layout */}
                
                <h3>
                    Welcome to the Healthy Nutrition section. Here you will find valuable information on how to maintain a healthy diet and make nutritious choices.
                </h3>
                <br /> {/* Line break for spacing */}
                
                <h5 className="custom-h6">
                    Maintaining a healthy diet and making nutritious choices involves a balanced approach to eating that supports overall well-being. Here’s a guide to help you make better food choices:
                </h5>
                <br /> {/* Line break for spacing */}
                
                {/* List of nutrition tips */}
                <ul className="custom-list"><b>1.</b> Eat a Variety of Foods
                    <li> Fruits and Vegetables: Aim for a colorful plate to ensure a range of vitamins and minerals. Try to include leafy greens, berries, citrus fruits, and root vegetables.</li>
                    <li> Whole Grains: Opt for whole grains like brown rice, quinoa, and whole wheat bread instead of refined grains.</li>
                    <li> Proteins: Include a mix of lean proteins such as chicken, fish, legumes, and nuts.</li>
                    <li> Dairy or Alternatives: Choose low-fat or fat-free dairy products or fortified plant-based alternatives like almond or soy milk.</li>
                </ul>

                <ul className="custom-list"><b>2.</b> Balance Your Meals
                    <li> Macronutrients: Aim for a balance of carbohydrates, proteins, and fats. For instance, a meal could include grilled chicken (protein), quinoa (carbohydrate), and avocado (healthy fat).</li>
                    <li> Portion Control: Use smaller plates to help manage portion sizes and avoid overeating.</li>
                </ul>

                <ul className="custom-list"><b>3.</b> Hydrate Properly
                    <li> Water: Drink plenty of water throughout the day. Aim for at least 8 cups (about 2 liters) or more if you’re active.</li>
                    <li> Limit Sugary Drinks: Reduce consumption of sodas and high-calorie beverages.</li>
                </ul>

                <ul className="custom-list"><b>4.</b> Choose Healthy Fats
                    <li> Sources: Incorporate healthy fats from sources like avocados, nuts, seeds, and olive oil.</li>
                    <li> Limit Saturated and Trans Fats: Minimize intake of red meats, fried foods, and processed snacks.</li>
                </ul>

                <ul className="custom-list"><b>5.</b> Limit Added Sugars and Sodium
                    <li> Read Labels: Be mindful of added sugars in packaged foods and limit your intake.</li>
                    <li> Reduce Sodium: Opt for fresh foods over processed ones and use herbs and spices for flavor instead of salt.</li>
                </ul>

                <ul className="custom-list"><b>6.</b> Plan Your Meals
                    <li> Meal Prep: Prepare meals ahead of time to ensure you have healthy options available.</li>
                    <li> Snacking: Choose nutritious snacks like fruits, nuts, or yogurt instead of sugary or salty options.</li>
                </ul>

                <ul className="custom-list"><b>7.</b> Mindful Eating
                    <li> Listen to Your Body: Eat when you’re hungry and stop when you’re full. Avoid eating out of boredom or stress.</li>
                    <li> Eat Slowly: Take time to enjoy your food and pay attention to hunger and fullness cues.</li>
                </ul>

                <ul className="custom-list"><b>8.</b> Be Flexible
                    <li> Moderation: It’s okay to enjoy occasional treats. The key is moderation and not letting indulgences derail your overall healthy eating patterns.</li>
                    <li> Adaptation: Adjust your diet based on personal health needs, preferences, and lifestyle changes.</li>
                </ul>

                <ul className="custom-list"><b>9.</b> Educate Yourself
                    <li> Stay Informed: Keep learning about nutrition and how different foods impact your health.</li>
                    <li> Seek Professional Advice: Consult with a registered dietitian or nutritionist for personalized guidance.</li>
                </ul>

                <ul className="custom-list"><b>10.</b> Stay Active
                    <li> Combine Diet with Exercise: Regular physical activity complements a healthy diet and supports overall wellness.</li>
                </ul>
                <br /> {/* Line break for spacing */}
                
                <p>
                    Making consistent, nutritious choices is about creating habits that fit your lifestyle and preferences. With time and practice, maintaining a healthy diet can become a natural part of your routine.
                </p>
            </Container>
        </Container>
    );
}
