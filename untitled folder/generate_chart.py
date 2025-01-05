import pandas as pd
import plotly.express as px

data = {'Country': ['Brazil', 'Vietnam', 'Colombia'],
        'Average Exports': [34028.91, 24715.73, 11352.27]}
df = pd.DataFrame(data)

# The bar chart
fig = px.bar(df, x='Country', y='Average Exports',
             title='Top 3 Coffee Exporters (Average Exports: 2013–2023)',
             color='Average Exports',
             color_continuous_scale='reds')

# Save as HTML file
fig.write_html('top_3_exporters.html')
fig.show()
