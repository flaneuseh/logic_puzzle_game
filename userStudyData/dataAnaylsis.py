import pandas as pd 
import numpy as np 
from scipy import stats
from scipy.stats import f_oneway
from statsmodels.stats.anova import AnovaRM  
COLOR1 = "#BFDBED"
COLOR2 = "#F89C3A"
COLOR3 = "#98A253"
COLOR4 = "#715B70"
COLOR5 = "#014550"

# set up data 


df = pd.read_csv("userStudyData/game_play_data_full.csv")
df["percent_incorrect"] = df["num_incorrect"] / (df["num_correct"] + df["num_incorrect"])
df["percent_correct"] = df["num_correct"] / (df["num_correct"] + df["num_incorrect"])
df["total_time_seconds"]  = df["total_time"] / 1000 
df["total_time_minutes"]  = df["total_time_seconds"] / 60

dropouts = df[df["challenge_scale"] == -1]
print(dropouts.groupby("narrMod").size()) 
df = df.replace(-1,np.NaN)
df["comment"] = df["comment"].replace(np.NaN, "")

print(df.head())

df2 = df.dropna()
print(df2.groupby("narrMod").size()) 


narrPuzzles = df2[df2["narrMod"] == "nar"]
ifPuzzles = df2[df2["narrMod"] == "if"]
cluesPuzzles = df2[df2["narrMod"] == "hints"]

experts = df2[df2["user_category"] == "expert"]
non_experts = df2[df2["user_category"] != "expert"]

print(len(experts))
print("\nMean Experts")
print(experts[["challenge_scale", "enjoyment_scale", "narrative_scale", "percent_incorrect", "num_correct", "total_time_seconds", "is_correct"]].mean()) 


print(len(non_experts))
print("\nMean Non Experts")
print(non_experts[["challenge_scale", "enjoyment_scale", "narrative_scale", "percent_incorrect", "num_correct", "total_time_seconds", "is_correct"]].mean()) 

print(len(ifPuzzles))

print("\nMed IF")
print(ifPuzzles[["challenge_scale", "enjoyment_scale", "narrative_scale", "percent_incorrect", "num_correct", "total_time_seconds", "is_correct"]].mean()) 

print("\nMed Narrative")
print(narrPuzzles[["challenge_scale", "enjoyment_scale", "narrative_scale", "percent_incorrect",  "num_correct", "total_time_seconds", "is_correct"]].mean()) 

print("\nMed Clues")
print(cluesPuzzles[["challenge_scale", "enjoyment_scale", "narrative_scale", "percent_incorrect",  "num_correct", "total_time_seconds", "is_correct"]].mean()) 

## Kruskal-Wallis Test 

print("\n\nKruskal-Wallis Tests")

chall_result = stats.kruskal(narrPuzzles["challenge_scale"], ifPuzzles["challenge_scale"], cluesPuzzles["challenge_scale"])


print("\nChallenge Results")
print(chall_result)

enjoy_result = stats.kruskal(narrPuzzles["enjoyment_scale"], ifPuzzles["enjoyment_scale"], cluesPuzzles["enjoyment_scale"])

print("\nEnjoyment Results")
print(enjoy_result)

narr_result = stats.kruskal(narrPuzzles[ "narrative_scale"], ifPuzzles[ "narrative_scale"], cluesPuzzles[ "narrative_scale"])

print("\nNarrative Results")
print(narr_result)

num_cor_result = stats.kruskal(narrPuzzles["num_correct"], ifPuzzles["num_correct"], cluesPuzzles["num_correct"])

print("\nNum Correct")
print(num_cor_result)

per_incor_result = stats.kruskal(narrPuzzles["percent_incorrect"], ifPuzzles["percent_incorrect"], cluesPuzzles["percent_incorrect"])

print("\nPercent incorrect")
print(per_incor_result)

is_cor_result = stats.kruskal(narrPuzzles["is_correct"], ifPuzzles["is_correct"], cluesPuzzles["is_correct"])

print("\nIs correct")
print(is_cor_result)

time_result = stats.kruskal(narrPuzzles["total_time_seconds"], ifPuzzles["total_time_seconds"], cluesPuzzles["total_time_seconds"])

print("\nTime")
print(time_result)


rankings = pd.read_csv("userStudyData/rankings.csv")

print("\nRankings challenge")
r =stats.kruskal(rankings["nar_diff_rank"], rankings["if_diff_rank"], rankings["hints_diff_rank"])
print(r)

print("\nRankings enjoyment")
r =stats.kruskal(rankings["nar_enj_rank"], rankings["if_enj_rank"], rankings["hints_enj_rank"])
print(r)

print("\nRankings narr")
r =stats.kruskal(rankings["nar_narr_rank"], rankings["if_narr_rank"], rankings["hints_narr_rank"])
print(r)

print("\nRankings Narrative")
print("if", rankings["if_narr_rank"].median())
print("nar", rankings["nar_narr_rank"].median())
print("clues", rankings["hints_narr_rank"].median())


print("\nRankings Enjoyment")
print("if", rankings["if_enj_rank"].median())
print("nar", rankings["nar_enj_rank"].median())
print("clues", rankings["hints_enj_rank"].median())

print("\nRankings Difficulty")
print("if", rankings["if_diff_rank"].median())
print("nar", rankings["nar_diff_rank"].median())
print("clues", rankings["hints_diff_rank"].median())
