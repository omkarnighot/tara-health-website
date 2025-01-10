import { Typography, Box, Grid2 } from "@mui/material";

const LifestyleSection = () => {
  return (
    <Box sx={{ padding: "2rem" }} className="flex">
      <Grid2 container spacing={2}>
        {/* Left side: List of help topics */}
        <Grid2>
          <Typography variant="h4" sx={{ marginBottom: "1rem", fontWeight: "bold" }}>
            Get Help With
          </Typography>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {[
              "Digestive troubles",
              "PCOS/PCOD management",
              "Hair fall and skin damage issues",
              "Diabetes management",
              "Thyroid management",
              "Cholesterol and heart health",
              "Nutritional deficiencies",
              "Fertility and immunity",
              "Fatty liver issues",
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
                <span style={{ color: "red", fontSize: "1.5rem", marginRight: "0.5rem" }}>✔</span>
                <Typography variant="body1">{item}</Typography>
              </li>
            ))}
          </ul>
        </Grid2>

        {/* Right side: Images */}
        <Grid2>
          <Grid2 container spacing={2}>
            {/* Top row: Two smaller images */}
            <Grid2>
              <img
                src="grid1.png"
                alt="Meditation"
                style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
              />
            </Grid2>
            <Grid2>
              <img
                src="grid2.png"
                alt="Healthy eating"
                style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
              />
            </Grid2>
            {/* Bottom row: Larger image */}
            <Grid2>
              <img
                src="grid3.png"
                alt="Fitness and nutrition"
                style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default LifestyleSection;
